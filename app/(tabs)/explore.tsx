import { FlatList, Text, View, TextInput, Pressable, Image } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import { useState } from "react";

interface TrendingItem {
  id: string;
  title: string;
  count: string;
  image: string;
}

const TRENDING_ITEMS: TrendingItem[] = [
  {
    id: "1",
    title: "#LeviLink",
    count: "125K posts",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    title: "#SocialMedia",
    count: "456K posts",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    title: "#Technology",
    count: "789K posts",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    title: "#Creative",
    count: "234K posts",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop",
  },
  {
    id: "5",
    title: "#Photography",
    count: "567K posts",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop",
  },
  {
    id: "6",
    title: "#Lifestyle",
    count: "345K posts",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop",
  },
];

export default function ExploreScreen() {
  const colors = useColors();
  const [searchQuery, setSearchQuery] = useState("");

  const renderTrendingItem = ({ item }: { item: TrendingItem }) => (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      className="flex-1 m-1 rounded-lg overflow-hidden"
    >
      <Image
        source={{ uri: item.image }}
        className="w-full h-32 bg-muted"
      />
      <View className="absolute inset-0 bg-black/40 justify-end p-3">
        <Text className="text-white font-semibold text-sm">{item.title}</Text>
        <Text className="text-white/80 text-xs">{item.count}</Text>
      </View>
    </Pressable>
  );

  return (
    <ScreenContainer className="p-0">
      <FlatList
        data={TRENDING_ITEMS}
        renderItem={renderTrendingItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ flex: 1 }}
        ListHeaderComponent={
          <View className="bg-surface p-4 border-b border-border">
            {/* Search Bar */}
            <View
              className="flex-row items-center bg-background border border-border rounded-full px-4 py-2 gap-2"
              style={{ backgroundColor: colors.background }}
            >
              <IconSymbol name="magnifying.glass" size={18} color={colors.muted} />
              <TextInput
                placeholder="Rechercher hashtags, utilisateurs..."
                placeholderTextColor={colors.muted}
                className="flex-1 text-foreground"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            {/* Section Title */}
            <Text className="text-foreground font-bold text-lg mt-6 mb-3">
              Tendances
            </Text>
          </View>
        }
        contentContainerStyle={{ padding: 4 }}
      />
    </ScreenContainer>
  );
}
