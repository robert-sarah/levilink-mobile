import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";
import { useState } from "react";
import * as Haptics from "expo-haptics";

export default function CreateScreen() {
  const colors = useColors();
  const [postContent, setPostContent] = useState("");
  const [contentType, setContentType] = useState<"text" | "photo" | "video">("text");

  const handlePublish = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setPostContent("");
  };

  const handleSelectPhoto = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleSelectVideo = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView className="flex-1 bg-surface">
        {/* Header */}
        <View className="bg-surface border-b border-border p-4 flex-row items-center justify-between">
          <Text className="text-foreground font-bold text-lg">Créer un post</Text>
          <Pressable
            style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          >
            <IconSymbol name="xmark" size={24} color={colors.foreground} />
          </Pressable>
        </View>

        {/* Content Type Tabs */}
        <View className="flex-row border-b border-border">
          {[
            { type: "text" as const, label: "Texte", icon: "paperplane.fill" as const },
            { type: "photo" as const, label: "Photo", icon: "square.and.arrow.up" as const },
            { type: "video" as const, label: "Vidéo", icon: "square.and.arrow.up" as const },
          ].map((tab) => (
            <Pressable
              key={tab.type}
              onPress={() => setContentType(tab.type)}
              className="flex-1 py-4 border-b-2"
              style={{
                borderBottomColor: contentType === tab.type ? colors.primary : "transparent",
              }}
            >
              <View className="flex-row items-center justify-center gap-2">
                <IconSymbol
                  name={tab.icon}
                  size={18}
                  color={contentType === tab.type ? colors.primary : colors.muted}
                />
                <Text
                  className={contentType === tab.type ? "text-primary font-semibold" : "text-muted"}
                >
                  {tab.label}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Content Input */}
        <View className="p-4">
          {contentType === "text" && (
            <TextInput
              placeholder="Qu'est-ce que tu penses?"
              placeholderTextColor={colors.muted}
              className="text-foreground text-base leading-relaxed"
              multiline
              numberOfLines={8}
              value={postContent}
              onChangeText={setPostContent}
              style={{ minHeight: 200, textAlignVertical: "top" }}
            />
          )}

          {contentType === "photo" && (
            <Pressable
              onPress={handleSelectPhoto}
              className="border-2 border-dashed border-primary rounded-lg p-8 items-center justify-center"
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <IconSymbol name="square.and.arrow.up" size={48} color={colors.primary} />
              <Text className="text-foreground font-semibold mt-4">Sélectionner une photo</Text>
              <Text className="text-muted text-sm mt-2">Appuyez pour choisir une image</Text>
            </Pressable>
          )}

          {contentType === "video" && (
            <Pressable
              onPress={handleSelectVideo}
              className="border-2 border-dashed border-primary rounded-lg p-8 items-center justify-center"
              style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
            >
              <IconSymbol name="square.and.arrow.up" size={48} color={colors.primary} />
              <Text className="text-foreground font-semibold mt-4">Sélectionner une vidéo</Text>
              <Text className="text-muted text-sm mt-2">Appuyez pour choisir une vidéo</Text>
            </Pressable>
          )}
        </View>

        {/* Privacy Settings */}
        <View className="bg-background p-4 border-t border-border">
          <Text className="text-foreground font-semibold mb-3">Confidentialité</Text>
          <View className="flex-row gap-2">
            {[
              { label: "Public", icon: "globe" },
              { label: "Amis", icon: "person.fill" },
              { label: "Privé", icon: "lock.fill" },
            ].map((option) => (
              <Pressable
                key={option.label}
                className="flex-1 py-2 px-3 rounded-full border border-border items-center"
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
              >
                <Text className="text-foreground text-sm">{option.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Publish Button */}
      <View className="bg-surface border-t border-border p-4">
        <Pressable
          onPress={handlePublish}
          className="bg-primary rounded-full py-3 items-center"
          style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1, transform: [{ scale: pressed ? 0.97 : 1 }] }]}
        >
          <Text className="text-white font-bold text-base">Publier</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}
