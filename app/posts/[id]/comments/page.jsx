import Link from 'next/link';

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 20,
    },
  }).then((res) => res.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <small>{comment.email}</small>
          </li>
        );
      })}
    </ul>
  );
}
