import React from 'react';
import { getData } from './hooks/useGetData';
import InfiniteScroll from 'react-infinite-scroll-component';

const PostList = () => {
  const pageSize = 20;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = getData.fetchPosts({ pageSize });

  const fetchedGamesCount =
    posts?.pages.reduce((total, page) => total + page.length, 0) || 0;

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ul className="list-group">
        <InfiniteScroll
          dataLength={fetchedGamesCount}
          hasMore={!!hasNextPage}
          next={() => fetchNextPage()}
          loader={'Loading...'}
        >
          {posts.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page?.map((post) => (
                <li key={post.id} className="list-group-item">
                  {post.title}
                </li>
              ))}
            </React.Fragment>
          ))}
        </InfiniteScroll>
      </ul>
    </>
  );
};

export default PostList;
