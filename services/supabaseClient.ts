export const loadUserDataFromCloud = async (username: string): Promise<'NETWORK_ERROR' | any[] | null> => {
  try {
    const raw = localStorage.getItem(`baudi_data_${username}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error('loadUserDataFromCloud error', err);
    return 'NETWORK_ERROR';
  }
};

export const saveUserDataToCloud = async (username: string, data: any): Promise<'NETWORK_ERROR' | boolean> => {
  try {
    localStorage.setItem(`baudi_data_${username}`, JSON.stringify(data));
    return true;
  } catch (err) {
    console.error('saveUserDataToCloud error', err);
    return 'NETWORK_ERROR';
  }
};
