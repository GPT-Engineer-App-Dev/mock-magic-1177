import { Container, Heading, Input, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container p={4}>
      <Heading mb={4}>My Todo List</Heading>
      <Input placeholder="Enter a new todo" mb={4} />
      <UnorderedList>{}</UnorderedList>
    </Container>
  );
};

export default Index;
