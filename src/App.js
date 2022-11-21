import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Posts from './components/Posts/Posts';
import SkeletonC from './components/Skeleton/SkeletonC';

const App = () => {
  const [state, setState] = useState({
    items: [],
    hasMore: true,
    page: 2,
  });

  const fetchMoreData = () => {
    if (state.items.length >= 50) {
      setState((prev) => {
        return { ...prev, hasMore: false };
      });
      return;
    }
    setState((prev) => {
      return { ...prev, page: prev.page + 1 };
    });
    // To fake a server call with delayed loading
    setTimeout(async () => {
      const fetchDataFromAPIreq = await fetch(
        `https://randomuser.me/api/?page=${state.page}&results=8&seed=abc`
      );
      const fetchDataFromAPIres = await fetchDataFromAPIreq.json();
      setState((prev) => {
        return {
          ...prev,
          items: prev.items.concat(fetchDataFromAPIres.results),
        };
      });
    }, 2000);
  };

  useEffect(() => {
    if (state.items.length === 0) {
      fetch(`https://randomuser.me/api/?page=${state.page}&results=8&seed=abc`)
        .then((response) => response.json())
        .then((data) =>
          setState((prev) => {
            return { ...prev, items: data.results };
          })
        );
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1
        style={{
          fontFamily: 'monospace',
          textAlign: 'center',
          fontSize: '2rem',
          border: '2px dashed blue',
          width: '10em',
          margin: '1em auto 0 auto',
          padding: '1%',
        }}
      >
        Infinite Scrolling
      </h1>
      <hr style={{ width: '50%', margin: '2em auto' }} />
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={<SkeletonC />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>You have reached the end of the page !</b>
          </p>
        }
      >
        <Posts items={state.items} />
      </InfiniteScroll>
    </div>
  );
};

export default App;
