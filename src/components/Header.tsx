import Nav from './Nav';
import banner from './../images/banner.jpg';

export default function Header() {
  return (
    <div
      className="h-96 bg-cover"
      style={{ backgroundImage: `url(${banner})` }}>
      <Nav />
      <div className="flex justify-center">
        <h1 className="text-white text-4xl">Hi, I'm Nicolas</h1>
      </div>
    </div>
  );
}
