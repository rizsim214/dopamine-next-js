import { create } from "zustand";

interface IStore {
  isHamburgerNavigationClicked: boolean;
  expandNavigation: () => void;

  profileNavigation: boolean;
  expandProfileNavigation: () => void;
}

export const useStore = create<IStore>((set) => ({
  // Dropdown Mobile Navigation
  isHamburgerNavigationClicked: false,
  expandNavigation() {
    set(({ isHamburgerNavigationClicked }) => ({
      isHamburgerNavigationClicked: !isHamburgerNavigationClicked,
    }));
  },

  // Profile Navigaiton Dropdown
  profileNavigation: false,
  expandProfileNavigation() {
    set(({ profileNavigation }) => ({ profileNavigation: !profileNavigation }));
  },
}));
