import { Box, useBreakpoint } from "@chakra-ui/react";
import Nav from "./Nav";
import Hero from "./Hero";
import PizzaMenu from "./PizzaMenu";
import IceCreamMenu from "./IceCreamMenu";

function App() {
  const breakpoint = useBreakpoint();
  const isMobile = ["base", "xs", "sm", "md"].includes(breakpoint);
  return (
    <Box>
      <Nav isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <PizzaMenu isMobile={isMobile} />
      <Box
        backgroundImage={
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f4207ba-d439-4117-a715-4e6f229f4760/dbrkrf4-dc4ab544-232b-4d12-b678-ac4a07a81796.jpg/v1/fill/w_1024,h_683,q_75,strp/ice_cream_buffet_by_himeogi_dbrkrf4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvNGY0MjA3YmEtZDQzOS00MTE3LWE3MTUtNGU2ZjIyOWY0NzYwXC9kYnJrcmY0LWRjNGFiNTQ0LTIzMmItNGQxMi1iNjc4LWFjNGEwN2E4MTc5Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.avcfMRemvOwJP6_e3COhEB7wVL045fB_IL-b4feojgM"
        }
        height="400px"
        backgroundAttachment="fixed"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        width="100%"
      />
      <IceCreamMenu isMobile={isMobile} />
    </Box>
  );
}

export default App;
