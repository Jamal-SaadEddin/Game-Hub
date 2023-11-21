import {
  HStack,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="5px">
          <HStack>
            <SkeletonCircle />
            <SkeletonText noOfLines={1} width="100px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GameListSkeleton;
