import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson05 from "./lessons/lesson05/lesson05";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // этот пустой тег - это react фрагмент
  // мы используем его для того чтобы по правилам react
  // обернуть несколько дочерних компонентов в родитель
  <>
    
    {/*вызов react компонента*/}
      {/* самозакрывающийся тег с именем функции-компонента */}
    {/* не забудьте убедиться что у вас отработал импорт */}
    <Lesson05/>
    
  </>
);




