import styled from './styles.module.scss';

export function Header() {
  return (
    <header className={styled.headerContainer}>
      <div className={styled.headerContent}>
        <img src="" alt="Logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">Posts</a>
        </nav>
      </div>
    </header>
  )
}