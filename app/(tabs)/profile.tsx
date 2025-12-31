import { FlatList, Text, View, Pressable, Image, ScrollView } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import * as Haptics from "expo-haptics";

interface UserPost {
  id: string;
  image: string;
  likes: number;
}

const USER_POSTS: UserPost[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=200&fit=crop",
    likes: 234,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop",
    likes: 156,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop",
    likes: 412,
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop",
    likes: 189,
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop",
    likes: 267,
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop",
    likes: 345,
  },
];

export default function ProfileScreen() {
  const colors = useColors();

  const handleEditProfile = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleSettings = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const renderPost = ({ item }: { item: UserPost }) => (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      className="flex-1 m-1 rounded-lg overflow-hidden"
    >
      <Image
        source={{ uri: item.image }}
        className="w-full h-32 bg-muted"
      />
      <View className="absolute inset-0 bg-black/40 justify-center items-center">
        <View className="flex-row items-center gap-2">
          <IconSymbol name="heart.fill" size={16} color="#FF6B6B" />
          <Text className="text-white font-semibold text-sm">{item.likes}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <ScreenContainer className="p-0">
      <FlatList
        data={USER_POSTS}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ flex: 1 }}
        ListHeaderComponent={
          <View className="bg-surface border-b border-border p-6">
            {/* Profile Header */}
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-row items-center flex-1">
                <Image
                  source={{ uri: "https://i.pravatar.cc/150?img=10" }}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <View className="flex-1">
                  <Text className="text-foreground font-bold text-lg">Mon Profil</Text>
                  <Text className="text-muted text-sm">@monprofil</Text>
                </View>
              </View>
              <Pressable
                onPress={handleSettings}
                style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
              >
                <IconSymbol name="gear" size={24} color={colors.foreground} />
              </Pressable>
            </View>

            {/* Bio */}
            <Text className="text-foreground text-sm mb-4 leading-relaxed">
              Bienvenue sur mon profil LeviLink! J'aime partager mes moments et me connecter avec d'autres utilisateurs. 📸✨
            </Text>

            {/* Stats */}
            <View className="flex-row justify-around mb-6 py-4 border-t border-b border-border">
              <View className="items-center">
                <Text className="text-foreground font-bold text-lg">42</Text>
                <Text className="text-muted text-xs">Posts</Text>
              </View>
              <View className="items-center">
                <Text className="text-foreground font-bold text-lg">1.2K</Text>
                <Text className="text-muted text-xs">Followers</Text>
              </View>
              <View className="items-center">
                <Text className="text-foreground font-bold text-lg">543</Text>
                <Text className="text-muted text-xs">Following</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row gap-2">
              <Pressable
                onPress={handleEditProfile}
                className="flex-1 bg-primary rounded-full py-2 items-center"
                style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
              >
                <Text className="text-white font-semibold text-sm">Modifier le profil</Text>
              </Pressable>
              <Pressable
                className="flex-1 border border-border rounded-full py-2 items-center"
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
              >
                <Text className="text-foreground font-semibold text-sm">Partager</Text>
              </Pressable>
            </View>

            {/* Posts Section Title */}
            <Text className="text-foreground font-bold text-lg mt-6 mb-3">Mes Posts</Text>
          </View>
        }
        contentContainerStyle={{ padding: 4 }}
      />
    </ScreenContainer>
  );
}
