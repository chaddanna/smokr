import React, { FunctionComponent, createContext, useState } from "react";

export type EntryData = {
  id: string;
  title: string;
  date: Date;
  cooker: string;
  notes: string;
};

type EntriesContextValue = {
  entries: EntryData[];
  addEntry: (entry: EntryData) => void;
  removeEntry: (index: number) => void;
};

export const EntriesContext = createContext<EntriesContextValue>({
  entries: [],
  addEntry: () => null,
  removeEntry: () => null,
});

export const EntriesWrapper: FunctionComponent = ({ children }) => {
  const [entries, setEntries] = useState<EntryData[]>([]);
  function addEntry(entry: EntryData) {
    setEntries([...entries, entry]);
  }
  function removeEntry(index: number) {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  }
  return (
    <EntriesContext.Provider value={{ entries, addEntry, removeEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
