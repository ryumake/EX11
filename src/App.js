import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import webImg from "./img/Margarita.webp";
import htmlImg from "./img/MidoriSour.webp";
import cssImg from "./img/Mojito.webp";
import jsImg from "./img/ph.webp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "칵테일", sub: "칵테일 메뉴들" },
      welcome: { title: "칵테일 역사", 
                desc: "칵테일(영어: cocktail)은 술과 여러 종류의 음료, 첨가물 등을 섞어 만든 혼합주를 일컫는다. 다만, 무알콜 칵테일도 있으며 이들은 목테일(Mocktail, Mock과 Cocktail의 합성어)이라고 부른다.사람의 기호와 취향에 맞추어 독특한 맛과 빛깔을 낼 수 있다.명칭의 유래에 대해서는 여러 가지 설이 있지만, 1795년쯤 미국 루이지애나주 뉴올리언스에 이주해온 페이쇼라는 약사가 달걀 등을 넣은 음료를 조합해서 만들어서프랑스어의 coquetier라고 부른 데서 비롯되었다는 설이 유력하다.(혼합한 술에 닭 꼬리깃털(cock-tail)이 올려져 만들어진 단어라는 등의 설이 있다) 혼성음료를 만드는 습관은 미국에서 시작된 것이 아니고, 인도나 페르시아에서 펀치라는 혼성음료를 만들며 생겨났다.그것이 스페인 사람에 의해 유럽으로 전파됐다고 한다. 대한민국에 들어온 것은 그 연대가 확실하지 않으나 미국대사관이 다 지어졌을 때 만들어진 것으로 보이며, 대중화된 것은 8 ·15광복 후로 보인다." ,
                image: webImg},
      contents: [
        { id: 1, title: "미도리 샤워",
         desc: "칵테일의 한 종류.멜론 리큐르의 한 종류인 미도리를 사용해 만드는 유명한 칵테일이다.미도리 사와 또는 미도리 사워라고도 한다. 멜론맛인 미도리와 스윗&사워 믹스의 레몬향이 어우러져서 상큼한 색깔과 맛을 연출하는 것이 포인트. 흔히 국내의 바에서는 탄산이 들어가는 레시피로 만들어 주지만, 원래 레시피는 탄산이 들어가지 않는다. 탄산이 들어가지 않은 것이 더 부드럽고 맛이 좋다고는 하나, 개운한 느낌으로 즐기기 위해 탄산음료를 첨가해서 판매하는 듯 하다.",
         image: htmlImg },
        { id: 2, title: "모히또", 
        desc: "럼 베이스 칵테일로, 명칭은 마법의 부적이라는 의미의 스페인어인 ‘Mojo’ 에서 유래한 것이다. 기본적으로 럼 피즈에 민트를 첨가한 것이라고 할 수 있지만 민트의 시원한 청량감에 의해 훨씬 산뜻한 맛을 낸다. 라임과 민트의 밝은 초록색이 돋보여 시각적으로도 청량감을 준다. 맛은 달달함과 동시에 민트 향을 내면서 씁쓸한 뒷맛이 스쳐가니 나름 입체적인 맛이라 할 수 있다. 기원이 정확하지가 않다. 워낙 역사가 오래된 칵테일들, 특히 클래식 칵테일 계열들 중 자료 내용이 애매하거나 내용이 부족해 기원을 쉽게 밝힐 수 없는 경우가 있는데, 모히토도 그 중 하나이다.", 
        image: cssImg },
        { id: 3, title: "피치크러쉬", 
        desc: "피치 트리로 유명한 피치 시냅스 계열의 리큐르와 이런 저런 주스들을 잘 섞어서 만드는 한 잔이다.복숭아 향이 살짝 나며 맛은 약간 새콤한 느낌.사실상 술은 피치 시냅스밖에 안 들어가기 때문에 도수가 매우 낮으며,덕분에 여성들에게 인기가 많은 칵테일이다. 가끔 진짜 복숭아를 으깨서 넣는 경우도 있다고 한다.어찌 보면 이쪽이 더 칵테일의 이름(크러시)에 걸맞은 셈.",
        image: jsImg },
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