import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="bg-transparent border border-orange-400 shadow-2xl p-5 w-80 h-80 rounded-md flex items-center">
          <h1 className="text-3xl font-bold text-orange-700 text-left capitalize">
            Welcome {id} To My Very First Website! 💓🙏🙏🙏🙏🙏
          </h1>
        </div>
      </div>
    </section>
  );
};

export default User;
