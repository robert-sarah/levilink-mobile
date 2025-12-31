import { FlatList, Text, View, Pressable, Image } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isOnline: boolean;
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    name: "Alice Martin",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "C'est super! J'adore LeviLink 🎉",
    timestamp: "Il y a 5m",
    unread: 2,
    isOnline: true,
  },
  {
    id: "2",
    name: "Bob Johnson",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "À bientôt!",
    timestamp: "Il y a 1h",
    unread: 0,
    isOnline: false,
  },
  {
    id: "3",
    name: "Carol Davis",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Merci pour le partage!",
    timestamp: "Il y a 2h",
    unread: 1,
    isOnline: true,
  },
  {
    id: "4",
    name: "David Wilson",
    avatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "On se voit demain?",
    timestamp: "Il y a 3h",
    unread: 0,
    isOnline: false,
  },
  {
    id: "5",
    name: "Emma Taylor",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Haha, c'est drôle! 😂",
    timestamp: "Il y a 4h",
    unread: 0,
    isOnline: true,
  },
];

export default function MessagesScreen() {
  const colors = useColors();

  const handleNewMessage = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleConversationPress = (conversationId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const renderConversation = ({ item }: { item: Conversation }) => (
    <Pressable
      onPress={() => handleConversationPress(item.id)}
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      className="flex-row items-center p-4 border-b border-border"
    >
      <View className="relative mr-3">
        <Image
          source={{ uri: item.avatar }}
          className="w-12 h-12 rounded-full"
        />
        {item.isOnline && (
          <View className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-surface" />
        )}
      </View>

      <View className="flex-1">
        <View className="flex-row items-center justify-between mb-1">
          <Text className="text-foreground font-semibold">{item.name}</Text>
          <Text className="text-muted text-xs">{item.timestamp}</Text>
        </View>
        <Text className="text-muted text-sm" numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>

      {item.unread > 0 && (
        <View className="bg-primary rounded-full w-6 h-6 items-center justify-center ml-2">
          <Text className="text-white text-xs font-bold">{item.unread}</Text>
        </View>
      )}
    </Pressable>
  );

  return (
    <ScreenContainer className="p-0">
      <FlatList
        data={MOCK_CONVERSATIONS}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View className="bg-surface border-b border-border p-4 flex-row items-center justify-between">
            <Text className="text-foreground font-bold text-lg">Messages</Text>
            <Pressable
              onPress={handleNewMessage}
              style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
            >
              <IconSymbol name="paperplane.fill" size={24} color={colors.primary} />
            </Pressable>
          </View>
        }
      />
    </ScreenContainer>
  );
}
