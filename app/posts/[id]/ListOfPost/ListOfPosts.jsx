import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

/*const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};*/

export async function ListOfPosts() {
  //const posts = await fetchPosts();
  return (
    <>
      {/*{posts.slice(0, 5).map((post) => {*/}
      <article className="posts-container">
        <div className="posts-container__card">
          <Image
            className="post-container__card-img"
            src="/../public/post1.png"
            width="200"
            height="200"
            alt="post image"
          />
          <h3 className="posts-container__card-title">Domingo 20</h3>
          <Link className="posts-container__card-button" href="/posts/1">
            Ver el post
          </Link>
        </div>
      </article>
    </>
  );
}
