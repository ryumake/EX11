import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import lolImg from "./img/lol.png"
import champImg from "./img/champ.png"
import psImg from "./img/ps.png";
import roonImg from "./img/roon.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "League of Legends", sub: "Welcome" },
      welcome: { title: "LOL", 
                desc: "라이엇 게임즈가 개발 및 서비스 중인, 5명의 플레이어가 각자 다른 포지션에서 성장을 통해 아이템과 레벨을 올려 상대의 기지를 파괴하는 MOBA 장르의 게임. 게임 명칭의 앞 철자들을 따서 LoL(롤),영어권에서는 League등의 약칭으로도 불린다. 이전까지 있었던 MOBA(AOS) 게임들보다 진입 장벽을 낮추는 것으로 높은 인기를 얻었고 현재는 전 세계에서 많은 유저들을 보유중인데 PC 게임 중 전 세계에서 많이 플레이하는 게임 중 하나이며 2016년 기준 월 플레이어 수 1억 명 이상을 달성했고, 2019년 8월 기준 하루 전 세계 서버의 피크 시간 동시 접속자 수를 합치면 800만 명 이상이다. 또한 전 세계 E스포츠 대회 중 가장 많은 시청자 수 기록을 보유 중인 리그 오브 레전드 월드 챔피언십과 각 지역 리그 등 수많은 e스포츠 대회가 많이 개최되는 중이다." ,
                image: lolImg},
      contents: [
        { id: 1, title: "포지션",
         desc: "기본적인 구성은 상단 공격로(Top Lane) 1명 / 정글(Jungle) 1명 / 중단 공격로(Mid Lane) 1명 / 하단 공격로(Bottom Lane) 2명으로 이루어진다. 이 구성은 초반에 바텀과 미드 사이에서 생성되는 에픽 몬스터 드래곤을 더 쉽게 쟁취할 수 있도록 경쟁력을 갖추기 위해, 정글 몬스터를 전문적으로 처치할 인원을 정하고 바텀으로 두 명을 보낸 것에서 시작되었다. 각 공격로를 담당하는 라이너들은 공격로로 오는 아군 미니언과 함께 적군 포탑을 파괴하고 상대 라이너와 적군 미니언으로부터 아군 포탑을 지켜내면서 경험치와 골드를 획득하며, 정글러는 공격로마다 한정된 경험치와 골드를 라이너에게 최대한 몰아줌과 동시에 각 공격로 사이에 존재하는 중립 몬스터를 처치함으로써 경험치와 골드를 획득한다. 이때, 바텀의 두 명도 한 명에게 골드를 최대한 몰아주면서 다른 한 명은 팀적인 성장과 운영에 집중적으로 도모하는 바텀 라이너/서포터 체제가 완성된다.",
         image: psImg },
        { id: 2, title: "룬(roon)", 
        desc: "룬은 자신만의 스타일을 확고하게 가지고 시작할 수 있는 기능으로, 자신의 캐릭터의 강점을 더 강화하거나 약점을 보안하는 용도로 사용된다. 처음에는 게임에서 나오는 마법사의 컨셉이었지만, 점차 발전되며 게임에 없어서 안되는 중요한 요소가 되었다.", 
        image: roonImg },
        { id: 3, title: "챔피언", 
        desc: "리그오브레전드(LOL)에는 많은 캐릭터가 있으며, 지금도 업데이트가 계속 되고 있다. 리그 오브 레전드에서 각 플레이어가 조작하는 캐릭터다. 한국 서버 기준 브라이어까지 165명의 챔피언이 존재한다. 본래 챔피언 명칭에 관련된 설정이 존재했다. 결투재판의 대전사(Champion)라는 명칭을 차용한 것에서도 볼 수 있듯 어떻게 그들이 계속해서 부활하며, 어째서 생판 모르는 남이나 친구, 가족끼리도 싸우며, 왜 설정보다 훨씬 더 약한 상대에게도 지는지, 소환사(유저)가 챔피언의 힘을 제약해서 조종하고 그 링크가 서서히 맞추어진다는 설정으로 다 설명이 가능했다. 하지만 챔피언의 잇따른 추가로 스토리 진행이 힘들어지자 소환사 관련 설정은 대폭 축소되고 그냥 챔피언이라는 명칭만 남게 되었다.", 
        image: champImg },
      ],
    };
  }
  render() {
    var _title,
      _desc, _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }
}

export default App;