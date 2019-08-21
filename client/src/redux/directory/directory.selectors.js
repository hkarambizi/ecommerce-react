import { createSelector } from "reselect";

// Input Selector
const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
