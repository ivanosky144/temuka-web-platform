import { create } from 'zustand';

interface ChatState {
  isChatVisible: boolean;
  setChatVisible: (visible: boolean) => void;
  toggleChat: () => void;
}

const useChatStore = create<ChatState>((set) => ({
  isChatVisible: false,
  setChatVisible: (visible: boolean) => set({ isChatVisible: visible }),
  toggleChat: () =>
    set((state) => ({ isChatVisible: !state.isChatVisible })),
}));

export default useChatStore;