import { styled } from "../styles";
import { User } from "phosphor-react";
import * as AvatarRadix from "@radix-ui/react-avatar";
import { ComponentProps } from "@stitches/react";
export const AvatarContainer = styled(AvatarRadix.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$12",
  height: "$12",
  overflow: "hidden"
})

export const AvatarImage = styled(AvatarRadix.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"

})
export const AvatarFallback = styled(AvatarRadix.Fallback, {
  padding: "$4", width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
})
export type AvatarProps = ComponentProps<typeof AvatarImage>
export function Avatar(props: AvatarProps) {
  return <AvatarContainer>
    <AvatarImage {...props} />
    <AvatarFallback delayMs={600}>
      <User />
    </AvatarFallback>
  </AvatarContainer>
}
AvatarImage.displayName = "Avatar"