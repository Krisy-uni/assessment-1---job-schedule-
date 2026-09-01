
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');

const demoUsers = [
  {
    name: 'JobFlow Owner',
    email: 'owner@jobflow.com',
    password: 'Owner123',
    role: 'Owner'
  },
  {
    name: 'Sarah Johnson',
    email: 'sarah@jobflow.com',
    password: 'Worker123',
    role: 'Worker'
  },
  {
    name: 'Mike Lee',
    email: 'mike@jobflow.com',
    password: 'Worker123',
    role: 'Worker'
  },
  {
    name: 'Emma Brown',
    email: 'emma@jobflow.com',
    password: 'Worker123',
    role: 'Worker'
  },
  {
    name: 'James Wilson',
    email: 'james@jobflow.com',
    password: 'Worker123',
    role: 'Worker'
  }
];

async function seedUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB connected');

    const demoEmails = demoUsers.map(user => user.email);

    const deleteResult = await User.deleteMany({
      email: {
        $in: demoEmails
      }
    });

    console.log(
      `Deleted ${deleteResult.deletedCount} existing demo users`
    );

    const usersWithHashedPasswords = await Promise.all(
      demoUsers.map(async user => {
        const hashedPassword = await bcrypt.hash(
          user.password,
          10
        );

        return {
          name: user.name,
          email: user.email,
          password: hashedPassword,
          role: user.role
        };
      })
    );

    const insertedUsers = await User.insertMany(
      usersWithHashedPasswords
    );

    console.log(`Inserted ${insertedUsers.length} users`);

    insertedUsers.forEach(user => {
      console.log(
        `${user.role}: ${user.name} (${user.email})`
      );
    });

  } catch (error) {
    console.error('User seed error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedUsers();
