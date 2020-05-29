import { MongoClient, Collection } from 'mongodb';

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  },

  async disconnect () {
    await this.client.close();
  },

  getColletion (name: string): Collection {
    return this.client.db().collection(name);
  }
};
