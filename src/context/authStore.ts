import { create } from "zustand";

interface AuthStore {
  isAuthenticated: boolean;
  user: string | null;
  signin: (username: string, password: string, callback?: VoidFunction) => void; // Add a callback parameter
  signout: (callback?: VoidFunction) => void; // Add a callback parameter
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  user: localStorage.getItem("user"),
  signin: (username, password, callback) => {
    // Check credentials (replace with your actual admin credentials)
    const adminUsername = "admin";
    const adminPassword = "password";

    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", username);
      set({ isAuthenticated: true, user: username });
      if (callback) {
        callback();
      }
    }
  },
  signout: (callback) => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    set({ isAuthenticated: false, user: null });
    if (callback) {
      callback();
    }
  },
}));
