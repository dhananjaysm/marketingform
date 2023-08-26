import { create } from "zustand";

export interface Answer {
  question: string; // Question text
  answer: string[]; // Selected answer options
}
export interface RecordTypeFields {
  Created: string;
  Email: string;
  Name: string;
  Response: Record<number,Answer>; 
}

export interface RecordType {
  id: string;
  createdTime: string;
  fields: RecordTypeFields;
}
interface DataStore {
  responseData: RecordType[];
  setResponseData: (data: RecordType[]) => void;
}

const useDataStore = create<DataStore>((set) => ({
  responseData: [],
  setResponseData: (data) => set({ responseData: data }),
}));

export default useDataStore;
