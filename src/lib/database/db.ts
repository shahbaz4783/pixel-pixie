import mongoose, { Mongoose } from 'mongoose';

interface MongooseConnection {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
	cached = (global as any).mongoose = {
		conn: null,
		promise: null,
	};
}

export const connectToDatabase = async () => {
	if (cached.conn) return cached.conn;
	if (!process.env.MONGO_URI) throw new Error('Missing MONGODB_URL');

	cached.promise =
		cached.promise ||
		mongoose.connect(process.env.MONGO_URI, {
			dbName: 'pixel-pixie',
			bufferCommands: false,
		});

	cached.conn = await cached.promise;

	return cached.conn;
};
