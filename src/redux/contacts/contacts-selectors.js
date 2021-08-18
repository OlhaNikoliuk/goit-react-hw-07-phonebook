export const getContactList = (state) => state.contacts.items;
export const getFilterValue = (state) => state.contacts.filter;
export const isLoadingValue = (state) => state.contacts.isLoading;

export const getVisibleContacts = (state) => {
  const contactList = getContactList(state);
  const filterValue = getFilterValue(state);

  const normalizedFilter = filterValue.toLowerCase();

  return contactList
    .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
};
