import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import AdminFreebiesSidebar from "../AdminFreebiesSidebar";
import TagsComp from "../TagsComp";

import {TiTimes} from "react-icons/ti"

const sidebarMaininfo = [
  {
    leftInfo: "Name",
    rightInfo: "CG TUTORIALS",
    showEditableSign: true,
  },

  {
    leftInfo: "Icon Image",
    rightInfo: "icon-image.png",
    // showVerifySign: true,
    showEditableSign: true,
  },
];

const categoriesImage = "/assets/image/logo/cates.png";

const Catsimage = ({ fill = "#B3BABE" }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="1.4rem"
      height="1.4rem"
      viewBox="0 0 85.000000 76.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)"
        fill={fill}
        stroke="none"
      >
        <path
          d="M0 380 l0 -380 425 0 425 0 0 380 0 380 -425 0 -425 0 0 -380z m774
278 c13 -19 16 -59 16 -234 0 -202 -1 -212 -21 -230 -20 -18 -41 -19 -350 -19
-302 0 -330 1 -346 18 -16 15 -18 41 -21 204 -2 102 -1 201 3 219 12 66 2 64
370 64 334 0 334 0 349 -22z m-166 -575 c-8 -41 -358 -41 -366 0 -3 16 11 17
183 17 172 0 186 -1 183 -17z"
        />
        <path
          d="M400 595 c0 -8 -11 -22 -24 -30 -20 -13 -29 -14 -46 -5 -18 10 -25 9
-38 -4 -13 -12 -13 -18 -2 -31 17 -20 0 -60 -29 -70 -29 -9 -27 -43 3 -55 29
-11 41 -42 27 -69 -14 -25 10 -47 36 -33 21 13 73 -11 73 -33 0 -9 10 -15 25
-15 18 0 25 5 25 18 0 26 47 47 67 31 21 -18 49 12 35 37 -13 23 4 60 29 67
24 7 25 44 1 52 -26 8 -43 46 -30 69 14 25 -8 49 -32 36 -25 -14 -66 3 -73 29
-6 24 -47 29 -47 6z m96 -89 c28 -28 34 -41 34 -78 -1 -116 -151 -152 -205
-48 -19 37 -19 63 0 100 19 36 59 59 104 60 25 0 42 -9 67 -34z"
        />
        <path
          d="M376 484 c-9 -23 -7 -97 3 -113 7 -11 19 -9 62 16 29 16 55 35 57 41
2 6 -24 25 -56 41 -51 26 -61 28 -66 15z"
        />
      </g>
    </svg>
  );
};

const CategoriesTabloid = ({
  style,
  onClick,
  text = "CG TUTORIALS",
  isAddBtn = false,
  imageFill = "#B3BABE",
}) => {
  return (
    <div style={style} onClick={onClick} className="admin__categories-tab">
      <div className="admin__categories-tab-image-container">
        {isAddBtn ? (
          <AiFillPlusCircle style={{ color: "#AF23AF", fontSize: "1.5rem" }} />
        ) : (
          // <img
          //   className="admin__categories-tab-image"
          //   src={categoriesImage}
          //   alt="categories"
          // />
          <Catsimage fill={imageFill} />
        )}
      </div>

      <span className="admin__categories-tab-text">{text}</span>
    </div>
  );
};

const TagsTabloid = ({
  style,
  popNo,
  onClick,
  text = "CG TUTORIALS",
  isAddBtn = false,
  imageFill = "#B3BABE",
  isAmill= false
}) => {
  return (
    <div style={style} onClick={onClick} className="admin__tags-tab">
      <div className="admin__tags-tab-image-container">
        {isAddBtn ? (
          <AiFillPlusCircle style={{ color: "#AF23AF", fontSize: "1.5rem" }} />
        ) : (
          // <img
          //   className="admin__categories-tab-image"
          //   src={categoriesImage}
          //   alt="categories"
          // />
          <span className={`admin__tags-tab-count-notifier ${isAmill && "amilly"}`}>
            {popNo}
          </span>
        )}
      </div>

      <span className="admin__tags-tab-text">{text}</span>
      <TiTimes className="admin__tags-tab-close"/>
    </div>
  );
};

const cats = [
  "CG TUTORIALS",
  "VR, AR GAME MODELS",
  "3D ASSETS",
  "SOFTWARE BRUSHES",
  "2D GAME ASSETS",
  "MATERIALS & SUBSTANCES",
  "3D PRINT MODELS",
  "TOOLS/APPLICATION",
  "STOCK PHOTOS",
];


const tags = [
  {popNo:"10.2m", isAMill:true, name:"#CGTUTORIALS"},
  {popNo:"7.2m", isAMill:true, name:"#VR,ARGAMEMODELS"},
  {popNo:"2.9m", isAMill:true, name:"#3DASSETS"},
  {popNo:"1.5m", isAMill:true, name:"#SOFTWAREBRUSHES"},
  {popNo:"500k", isAMill:false, name:"#2DGAMEASSETS"},
  {popNo:"100k", isAMill:false, name:"#MATERIALS&SUBSTANCES"},
  {popNo:"70.2k", isAMill:false, name:"#3DPRINTMODELS"},
  {popNo:"20k", isAMill:false, name:"#TOOLS/APPLICATION"},
  {popNo:"10.1k", isAMill:false, name:"#STOCKPHOTOS"},
  {popNo:"10.1k", isAMill:false, name:"#STOCKPHOTOS"},
  {popNo:"10.2m", isAMill:true, name:"#CGTUTORIALS"},
  {popNo:"7.2m", isAMill:true, name:"#VRARGAMEMODELS"},
  {popNo:"2.9m", isAMill:true, name:"#3DASSETS"},
  {popNo:"1.5m", isAMill:true, name:"#SOFTWAREBRUSHES"},
  {popNo:"500k", isAMill:false, name:"#2DGAMEASSETS"},
  {popNo:"100k", isAMill:false, name:"#MATERIALS&SUBSTANCES"},
  {popNo:"70.2k", isAMill:false, name:"#3DPRINTMODELS"},
  {popNo:"20k", isAMill:false, name:"#TOOLS/APPLICATION"},
  {popNo:"10.1k", isAMill:false, name:"#STOCKPHOTOS"},
  {popNo:"10.1k", isAMill:false, name:"#STOCKPHOTOS"},
  {popNo:"10.2m", isAMill:true, name:"#CGTUTORIALS"},
  {popNo:"7.2m", isAMill:true, name:"#VRARGAMEMODELS"},
  {popNo:"2.9m", isAMill:true, name:"#3DASSETS"},
  {popNo:"1.5m", isAMill:true, name:"#SOFTWAREBRUSHES"},
 


];
const TagsCatAdmin = () => {
  const [activeSideTab, setActiveSideTab] = useState("features");
  const [isSelected, setIsSelected] = useState(0);
  const [isSelectedTag, setIsSelectedTag] = useState(0);
  const [universallySelected, setUniversallySelected] = useState({
    isFirst: false,
    cat: 0,
    tag: 0,
  });

  return (
    <div className="admin__users-container">
      <AdminFreebiesSidebar
        type="user"
        setActiveSideTab={setActiveSideTab}
        activeSideTab={activeSideTab}
        sidebarMaininfoIts={sidebarMaininfo}
        actionButtonText="DELETE"
      />
      <section className="admin__users-tags-container">
        <TagsComp />
        <section className="admin__users-tags-body">
          <div className="admin__categories-container">
            <h3 className="admin__categories-container-header">
              <span
                onClick={() =>
                  setUniversallySelected((old) => ({ ...old, active: 0 }))
                }
                style={{
                  borderBottom: `.3rem solid ${
                    universallySelected.active == 0 ? "#FF9700" : "#353449"
                  }`,
                }}
              >
                CATEGORIES
              </span>
            </h3>
            <div className="admin__categories-container-body">
              {cats
                ? cats.map((cat, index) => {
                    return (
                      <CategoriesTabloid
                        style={{
                          borderLeft: `.4rem solid ${
                            universallySelected.cat == index && universallySelected.active == 0
                              ? "#FF9700"
                              : "#353449"
                          }`,
                          color: `${
                            universallySelected.cat == index && universallySelected.active == 0
                              ? "#FF9700"
                              : "#959AA0"
                          }`,
                        }}
                        onClick={() =>
                          setUniversallySelected((old) => ({
                            ...old,
                            cat: index,
                          }))
                        }
                        imageFill={universallySelected.cat == index && universallySelected.active == 0 ? "#FF9700" : "#B3BABE"}
                        text={cat}
                      />
                    );
                  })
                : null}
              <CategoriesTabloid text="ADD CATEGORY" isAddBtn={true} />
            </div>
          </div>

          <div className="admin__categories-container">
            <h3 className="admin__categories-container-header">
              <span
                onClick={() =>
                  setUniversallySelected((old) => ({ ...old, active: 1 }))
                }
                style={{
                  borderBottom: `.3rem solid ${
                    universallySelected.active == 1 ? "#FF9700" : "#353449"
                  }`,
                }}
              >
                TAGS
              </span>
            </h3>
            <div className="admin__categories-container-body">
              {tags
                ? tags.map((tag, index) => {
                    return (
                      <TagsTabloid
                        style={{
                          borderLeft: `.4rem solid ${
                            universallySelected.tag == index &&  universallySelected.active == 1
                              ? "#FF9700"
                              : "#353449"
                          }`,
                          color: `${
                            universallySelected.tag == index && universallySelected.active == 1
                              ? "#FF9700"
                              : "#959AA0"
                          }`,
                        }}
                        onClick={() =>
                          setUniversallySelected((old) => ({
                            ...old,
                            tag: index,
                          }))
                        }
                        imageFill={universallySelected.tag == index && universallySelected.active == 1 ? "#FF9700" : "#B3BABE"}
                        text={tag.name}
                        popNo={tag.popNo}
                        isAmill={tag.isAMill}
                      />
                    );
                  })
                : null}
              <TagsTabloid text="ADD TAGS" isAddBtn={true} />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default TagsCatAdmin;
