
const mongoose = require('mongoose');
require('dotenv').config();

const Job = require('./models/Job');

const demoJobs = [
  {
    title: 'Hedge Trimming',
    date: '2026-09-01',
    startTime: '09:00',
    endTime: '12:00',
    location: '12 Smith Street, The Gap 4061',
    description: 'Trim the front and backyard hedges.',
    clientName: 'Alex Johnson',
    clientPhone: '0412345678',
    status: 'Pending',
    assignedWorker: 'Sarah Johnson'
  },
  {
    title: 'Garden Clean-up',
    date: '2026-09-01',
    startTime: '13:00',
    endTime: '15:30',
    location: '8 Waterworks Road, The Gap 4061',
    description: 'Remove leaves and garden waste.',
    clientName: 'Olivia Brown',
    clientPhone: '0423456789',
    status: 'Accepted',
    assignedWorker: 'Mike Lee'
  },
  {
    title: 'Lawn Mowing',
    date: '2026-09-02',
    startTime: '10:00',
    endTime: '12:00',
    location: '20 Payne Road, The Gap 4061',
    description: 'Mow the front and rear lawns.',
    clientName: 'Daniel Smith',
    clientPhone: '0434567890',
    status: 'Declined',
    assignedWorker: 'Emma Brown'
  },
  {
    title: 'Tree Pruning',
    date: '2026-09-03',
    startTime: '08:30',
    endTime: '11:30',
    location: '15 Parkview Drive, The Gap 4061',
    description: 'Prune small trees near the driveway.',
    clientName: 'Grace Wilson',
    clientPhone: '0445678901',
    status: 'Accepted',
    assignedWorker: 'James Wilson'
  },
  {
    title: 'Weeding Service',
    date: '2026-09-03',
    startTime: '13:00',
    endTime: '15:00',
    location: '31 Settlement Road, The Gap 4061',
    description: 'Remove weeds from garden beds.',
    clientName: 'Henry Clark',
    clientPhone: '0456789012',
    status: 'Pending',
    assignedWorker: 'Sarah Johnson'
  },
  {
    title: 'Mulch Installation',
    date: '2026-09-05',
    startTime: '09:00',
    endTime: '12:30',
    location: '6 Glen Affric Street, The Gap 4061',
    description: 'Install mulch in the front garden.',
    clientName: 'Sophia Taylor',
    clientPhone: '0467890123',
    status: 'Accepted',
    assignedWorker: 'Emma Brown'
  },
  {
    title: 'Yard Clean-up',
    date: '2026-09-07',
    startTime: '14:00',
    endTime: '16:30',
    location: '25 Illowra Street, The Gap 4061',
    description: 'General backyard clean-up.',
    clientName: 'Jack Anderson',
    clientPhone: '0478901234',
    status: 'Declined',
    assignedWorker: 'Mike Lee'
  },
  {
    title: 'Garden Maintenance',
    date: '2026-09-09',
    startTime: '10:30',
    endTime: '13:30',
    location: '17 Chaprowe Road, The Gap 4061',
    description: 'Regular garden maintenance.',
    clientName: 'Emily Harris',
    clientPhone: '0489012345',
    status: 'Pending',
    assignedWorker: 'James Wilson'
  },
  {
    title: 'Lawn Care',
    date: '2026-09-12',
    startTime: '08:00',
    endTime: '10:00',
    location: '40 Hilder Road, The Gap 4061',
    description: 'Mow, edge and tidy the lawn.',
    clientName: 'Noah Martin',
    clientPhone: '0490123456',
    status: 'Accepted',
    assignedWorker: 'Sarah Johnson'
  },
  {
    title: 'Hedge and Shrub Care',
    date: '2026-09-14',
    startTime: '11:00',
    endTime: '14:00',
    location: '19 Romea Street, The Gap 4061',
    description: 'Shape hedges and trim shrubs.',
    clientName: 'Chloe Walker',
    clientPhone: '0411223344',
    status: 'Pending',
    assignedWorker: 'Mike Lee'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB connected');

    const deleteResult = await Job.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} test jobs`);

    const insertedJobs = await Job.insertMany(demoJobs);
    console.log(`Inserted ${insertedJobs.length} demo jobs`);

  } catch (error) {
    console.error('Seed error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedDatabase();