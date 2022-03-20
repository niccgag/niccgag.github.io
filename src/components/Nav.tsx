import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Nav() {
  return (
    <nav>
      <ul className="justify-end text-white text-3xl grid grid-rows-5">
        <li className="pr-5">
          <a
            href="https://www.linkedin.com/in/nicolas-gagnepain-08574b101/"
            target="_blank">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/niccgag" target="_blank">
            <AiFillGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
}
