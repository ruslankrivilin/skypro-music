import Filters from "@/components/Filters/Filters";
import Nav from "@/components/Nav/Nav";
import Player from "@/components/Player/Player";
import Playlist from "@/components/Playlist/Playlist";
import Search from "@/components/Search/Search";
import Sidebar from "@/components/Sidebar/Sidebar";


export default function Home() {
  return (
  <div className="wrapper">
    <div className="container">
      <main className="main">
        <Nav/>
        <div className="main__centerblock centerblock">
          <Search/>
          <h2 className="centerblock__h2">Треки</h2>
          <Filters/>
          <Playlist/>
        </div>
        <Sidebar/>
      </main>
      <Player/>
      <footer className="footer" />
    </div>
  </div>
  );
}
