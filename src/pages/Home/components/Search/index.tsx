import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SearchContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchForm = z.infer<typeof searchFormSchema>;

interface SearchProps {
  postsLength: number;
  getPosts: (query?: string) => Promise<void>;
}

export function Search({ postsLength, getPosts }: SearchProps) {
  const { register, handleSubmit } = useForm<SearchForm>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchForm) {
    await getPosts(data.query);
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </SearchContainer>
  );
}
