import { FlatList, Text, View, Pressable, Image } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";

interface Post {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    author: "Alice Martin",
    avatar: "https://i.pravatar.cc/150?img=1",
    timestamp: "Il y a 2h",
    content: "Découvrez LeviLink, le réseau social qui combine le meilleur de Facebook, Instagram, TikTok et X! 🚀",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop",
    likes: 234,
    comments: 45,
    shares: 12,
    isLiked: false,
  },
  {
    id: "2",
    author: "Bob Johnson",
    avatar: "https://i.pravatar.cc/150?img=2",
    timestamp: "Il y a 4h",
    content: "Partager vos moments avec LeviLink est tellement facile et amusant! 😊",
    likes: 156,
    comments: 28,
    shares: 8,
    isLiked: false,
  },
  {
    id: "3",
    author: "Carol Davis",
    avatar: "https://i.pravatar.cc/150?img=3",
    timestamp: "Il y a 6h",
    content: "La nouvelle interface de LeviLink est incroyable! Très intuitive et belle. #LeviLink",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    likes: 412,
    comments: 67,
    shares: 23,
    isLiked: true,
  },
];

export default function HomeScreen() {
  const colors = useColors();

  const handleLike = (postId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleComment = (postId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleShare = (postId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View className="bg-surface border-b border-border">
      {/* Post Header */}
      <View className="flex-row items-center justify-between p-4">
        <View className="flex-row items-center flex-1">
          <Image
            source={{ uri: item.avatar }}
            className="w-10 h-10 rounded-full mr-3"
          />
          <View className="flex-1">
            <Text className="text-foreground font-semibold">{item.author}</Text>
            <Text className="text-muted text-xs">{item.timestamp}</Text>
          </View>
        </View>
        <Pressable
          onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
          style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
        >
          <IconSymbol name="ellipsis" size={20} color={colors.muted} />
        </Pressable>
      </View>

      {/* Post Content */}
      <View className="px-4 pb-3">
        <Text className="text-foreground text-base leading-relaxed">{item.content}</Text>
      </View>

      {/* Post Image */}
      {item.image && (
        <Image
          source={{ uri: item.image }}
          className="w-full h-48 bg-muted"
        />
      )}

      {/* Post Stats */}
      <View className="flex-row justify-between px-4 py-2 border-t border-border text-muted text-xs">
        <Text className="text-muted text-xs">{item.likes} likes</Text>
        <Text className="text-muted text-xs">{item.comments} commentaires</Text>
        <Text className="text-muted text-xs">{item.shares} partages</Text>
      </View>

      {/* Post Actions */}
      <View className="flex-row justify-around py-3 border-t border-border">
        <Pressable
          onPress={() => handleLike(item.id)}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, { flexDirection: "row", alignItems: "center" }]}
          className="flex-row items-center gap-2"
        >
          <IconSymbol
            name={item.isLiked ? "heart.fill" : "heart"}
            size={20}
            color={item.isLiked ? "#FF6B6B" : colors.muted}
          />
          <Text className="text-muted text-sm">Like</Text>
        </Pressable>

        <Pressable
          onPress={() => handleComment(item.id)}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, { flexDirection: "row", alignItems: "center" }]}
          className="flex-row items-center gap-2"
        >
          <IconSymbol name="bubble.right.fill" size={20} color={colors.muted} />
          <Text className="text-muted text-sm">Commenter</Text>
        </Pressable>

        <Pressable
          onPress={() => handleShare(item.id)}
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, { flexDirection: "row", alignItems: "center" }]}
          className="flex-row items-center gap-2"
        >
          <IconSymbol name="square.and.arrow.up" size={20} color={colors.muted} />
          <Text className="text-muted text-sm">Partager</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <ScreenContainer className="p-0">
      <FlatList
        data={MOCK_POSTS}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </ScreenContainer>
  );
}
