import { CardPost } from "./components/CardPost";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { PostsListContainer } from "./styles";

export function Home() {
  return (
    <>
      <Profile />
      <Search />
      <PostsListContainer>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </PostsListContainer>
    </>
  );
}
