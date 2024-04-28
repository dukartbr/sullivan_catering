import { Box, Text } from "@chakra-ui/react";

function Hero({ isMobile }: { isMobile: boolean }) {
  return (
    <Box
      backgroundImage="https://franchise.yourpie.com/wp-content/uploads/2021/04/bbq-chicken-pizza-800x400.jpg"
      // height="300px"
      backgroundAttachment="fixed"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="100%"
    >
      <Box
        backgroundColor="rgba(217, 4, 4, 0.5);"
        width={isMobile ? "100%" : "50%"}
        py={14}
        px={14}
        position="relative"
        textAlign="center"
      >
        <Text
          color="white"
          fontFamily="Holtwood One SC"
          fontSize="3.5rem"
          textAlign="left"
        >
          Pizza & Ice Cream Catering For All Your Events!
        </Text>
      </Box>
    </Box>
  );
}

export default Hero;
