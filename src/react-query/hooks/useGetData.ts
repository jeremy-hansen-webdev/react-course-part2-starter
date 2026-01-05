import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface TodoGeneric {
  id: number;
  title: string;
  userId: number;
}

interface Todo extends TodoGeneric {
  completed: boolean;
}

export interface Post extends TodoGeneric {
  body: string;
}

interface PostQuery {
  pageSize: number;
}

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getData = {
  fetchTodos: function () {
    return useQuery<Todo[], Error>({
      queryKey: ['todo'],
      queryFn: () =>
        axios.get<Todo[]>(baseUrl + '/todos').then((res) => res.data),
    });
  },

  fetchPosts: function (query: PostQuery) {
    return useInfiniteQuery<Post[], Error>({
      queryKey: ['post', query],
      queryFn: ({pageParam = 1}) =>
        axios
          .get<Post[]>(baseUrl + '/posts', {
            params: {
              _start: (pageParam - 1) * query.pageSize,
              _limit: query.pageSize,
            },
          })
          .then((res) => res.data),
      staleTime: 1 * 60 * 1000,
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
      },
    });
  },
};
