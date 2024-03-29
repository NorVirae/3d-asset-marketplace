import { useEffect, useState } from "react";

export const LoootyLogo = ({ style, color = "#8383b2" }) => {
  const logoCol = color;

  const [yScroll, setYScroll] = useState(1);
  const [textParts, setTextParts] = useState({
    lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    lMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    lTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yTip: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yTopOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yMiddleOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yBottomThree: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yBottomTwo: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yBottomOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
  });

  const handleScroll = (event) => {
    setYScroll(window.scrollY);
    LogoAnimationEngine(window.scrollY);
  };

  const LogoAnimationEngine = (scrollLevel) => {
    if (scrollLevel === 0) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yTip: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yTopOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yMiddleOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomThree: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomTwo: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
      }));
    }
    if (scrollLevel < 10 && scrollLevel > 1) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yTip: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yTopOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yMiddleOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomThree: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomTwo: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomOne: { x: 7, y: -15, scaleX: 1, scaleY: 1, display: "block" },
      }));
    }
    if (scrollLevel < 30 && scrollLevel > 10) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tTop: { x: -2, y: 4, scaleX: 1, scaleY: 1, display: "block" },
        yTip: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yTopOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yMiddleOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomThree: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomTwo: { x: 3, y: -6, scaleX: 1, scaleY: 1, display: "block" },
        yBottomOne: { x: 7, y: -15, scaleX: 1, scaleY: 1, display: "block" },
      }));
    }
    if (scrollLevel < 50 && scrollLevel > 30) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lTop: { x: -3.2, y: 7, scaleX: 1, scaleY: 1, display: "block" },
        tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tLeft: { x: 3, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tTop: { x: -3.7, y: 8, scaleX: 1, scaleY: 1, display: "block" },
        yTip: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yTopOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yMiddleOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomThree: { x: -2, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomTwo: { x: 1, y: -7, scaleX: 1, scaleY: 1, display: "block" },
        yBottomOne: { x: 5, y: -16, scaleX: 1, scaleY: 1, display: "block" },
      }));
    }
    if (scrollLevel < 70 && scrollLevel > 50) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lMiddle: { x: -1, y: 2, scaleX: 1, scaleY: 1, display: "block" },
        lTop: { x: -5.6, y: 13, scaleX: 1, scaleY: 1, display: "block" },
        tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tLeft: { x: 6, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tRight: { x: -6, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tTop: { x: -3.7, y: 8, scaleX: 1, scaleY: 1, display: "block" },
        yTip: { x: 0, y: 3, scaleX: 1, scaleY: 1, display: "block" },
        yTopOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yMiddleOne: { x: -3, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomThree: { x: -6, y: -3, scaleX: 1, scaleY: 1, display: "block" },
        yBottomTwo: { x: -3, y: -8, scaleX: 1, scaleY: 1, display: "block" },
        yBottomOne: { x: -1, y: -17.4, scaleX: 1, scaleY: 1, display: "block" },
      }));
    }
    if (scrollLevel < 90 && scrollLevel > 70) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lMiddle: { x: -1, y: 6, scaleX: 1, scaleY: 1, display: "block" },
        lTop: { x: -3, y: 34, scaleX: 1, scaleY: 0.5, display: "block" },
        tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tLeft: { x: 6, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tRight: { x: -6, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tTop: { x: -3.7, y: 8, scaleX: 1, scaleY: 1, display: "block" },
        yTip: { x: -5, y: 3, scaleX: 1, scaleY: 1, display: "block" },
        yTopOne: { x: -5, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yMiddleOne: { x: -8, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        yBottomThree: { x: -11, y: -3, scaleX: 1, scaleY: 1, display: "block" },
        yBottomTwo: { x: -9, y: -8, scaleX: 1, scaleY: 1, display: "block" },
        yBottomOne: { x: -6, y: -17.4, scaleX: 1, scaleY: 1, display: "block" },
      }));
    }
    if (scrollLevel < 120 && scrollLevel > 90) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lMiddle: { x: -1, y: 90, scaleX: 0, scaleY: 0, display: "none" },
        lTop: { x: -3, y: 90, scaleX: 0, scaleY: 0, display: "none" },
        tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tMiddle: { x: -3, y: 6, scaleX: 1, scaleY: 1, display: "block" },
        tLeft: { x: 6, y: 4, scaleX: 1, scaleY: 1, display: "block" },
        tRight: { x: -6, y: 4, scaleX: 1, scaleY: 1, display: "block" },
        tTop: { x: -3.7, y: 13, scaleX: 1, scaleY: 1, display: "block" },
        yTip: { x: -5, y: 3, scaleX: 1, scaleY: 1, display: "none" },
        yTopOne: { x: -5, y: 0, scaleX: 1, scaleY: 1, display: "none" },
        yMiddleOne: { x: -8, y: 0, scaleX: 1, scaleY: 1, display: "none" },
        yBottomThree: { x: -11, y: -3, scaleX: 1, scaleY: 1, display: "none" },
        yBottomTwo: { x: -9, y: -8, scaleX: 1, scaleY: 1, display: "none" },
        yBottomOne: { x: -6, y: -17.4, scaleX: 1, scaleY: 1, display: "none" },
      }));
    }
    if (scrollLevel < 140 && scrollLevel > 120) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 20, y: 0, scaleX: 0.5, scaleY: 1, display: "block" },
        lBottomLeft: { x: 14, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        lMiddle: { x: -1, y: 90, scaleX: 0, scaleY: 0, display: "none" },
        lTop: { x: -3, y: 90, scaleX: 0, scaleY: 0, display: "none" },
        tBottom: { x: -5, y: 0, scaleX: 1, scaleY: 1, display: "block" },
        tMiddle: { x: -3, y: 6, scaleX: 1, scaleY: 1, display: "none" },
        tLeft: { x: 6, y: 4, scaleX: 1, scaleY: 1, display: "none" },
        tRight: { x: -6, y: 4, scaleX: 1, scaleY: 1, display: "none" },
        tTop: { x: -3.7, y: 13, scaleX: 1, scaleY: 1, display: "none" },
        yTip: { x: -5, y: 3, scaleX: 1, scaleY: 1, display: "none" },
        yTopOne: { x: -5, y: 0, scaleX: 1, scaleY: 1, display: "none" },
        yMiddleOne: { x: -8, y: 0, scaleX: 1, scaleY: 1, display: "none" },
        yBottomThree: { x: -11, y: -3, scaleX: 1, scaleY: 1, display: "none" },
        yBottomTwo: { x: -9, y: -8, scaleX: 1, scaleY: 1, display: "none" },
        yBottomOne: { x: -6, y: -17.4, scaleX: 1, scaleY: 1, display: "none" },
      }));
    }
    if (scrollLevel > 140) {
      setTextParts((old) => ({
        ...old,
        lBottomRight: { x: 20, y: 0, scaleX: 0.5, scaleY: 1, display: "none" },
        lBottomLeft: { x: 14, y: 0, scaleX: 1, scaleY: 1, display: "none" },
        lMiddle: { x: -1, y: 90, scaleX: 0, scaleY: 0, display: "none" },
        lTop: { x: -3, y: 90, scaleX: 0, scaleY: 0, display: "none" },
        tBottom: { x: -5, y: 0, scaleX: 1, scaleY: 1, display: "none" },
        tMiddle: { x: -3, y: 6, scaleX: 1, scaleY: 1, display: "none" },
        tLeft: { x: 6, y: 4, scaleX: 1, scaleY: 1, display: "none" },
        tRight: { x: -6, y: 4, scaleX: 1, scaleY: 1, display: "none" },
        tTop: { x: -3.7, y: 13, scaleX: 1, scaleY: 1, display: "none" },
        yTip: { x: -5, y: 3, scaleX: 1, scaleY: 1, display: "none" },
        yTopOne: { x: -5, y: 0, scaleX: 1, scaleY: 1, display: "none" },
        yMiddleOne: { x: -8, y: 0, scaleX: 1, scaleY: 1, display: "none" },
        yBottomThree: { x: -11, y: -3, scaleX: 1, scaleY: 1, display: "none" },
        yBottomTwo: { x: -9, y: -8, scaleX: 1, scaleY: 1, display: "none" },
        yBottomOne: { x: -6, y: -17.4, scaleX: 1, scaleY: 1, display: "none" },
      }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));

    return () => {
        window.removeEventListener("scroll", (e) => handleScroll(e))
    }
  }, []);

  return (
    <div
      style={{
        width: "7rem",
        transform: "scale(.7)",
        height: "100%",
        alignItems: "center",
        display: "flex",
        zIndex: 44,
        justifyContent: "center",
        ...style,
      }}
      className="loooty-logo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 982.89 619.25">
        <title>logo slices</title>
        <polygon
          className="logo__anim"
          name="l-bottom-right"
          style={{
            display: `${textParts.lBottomRight.display}`,
            fill: color,
            transform: `scale(${textParts.lBottomRight.scaleX}, ${textParts.lBottomRight.scaleY}) translate(${textParts.lBottomRight.x}rem, ${textParts.lBottomRight.y}rem)`,
          }}
          points="253.71 276.37 215.21 359.49 79.99 359.49 118.73 276.37 253.71 276.37"
        />
        <polygon
          className="logo__anim"
          name="l-bottom-left"
          style={{
            display: `${textParts.lBottomLeft.display}`,
            fill: color,
            transform: `scale(${textParts.lBottomLeft.scaleX}, ${textParts.lBottomLeft.scaleY}) translate(${textParts.lBottomLeft.x}rem, ${textParts.lBottomLeft.y}rem)`,
          }}
          points="118.73 276.37 79.99 359.49 0 359.49 38.5 276.37 118.73 276.37"
        />
        <polygon
          className="logo__anim"
          name="l-middle"
          style={{
            display: `${textParts.lMiddle.display}`,
            fill: color,
            transform: `scale(${textParts.lMiddle.scaleX}, ${textParts.lMiddle.scaleY}) translate(${textParts.lMiddle.x}rem, ${textParts.lMiddle.y}rem)`,
          }}
          points="174.03 156.84 118.94 275.92 118.73 276.37 38.5 276.37 93.85 156.84 174.03 156.84"
        />
        <polygon
          className="logo__anim"
          name="l-top"
          style={{
            display: `${textParts.lTop.display}`,
            fill: color,
            transform: `scale(${textParts.lTop.scaleX}, ${textParts.lTop.scaleY}) translate(${textParts.lTop.x}rem, ${textParts.lTop.y}rem)`,
          }}
          points="246.59 0 174.03 156.84 93.85 156.84 143.31 50.05 246.59 0"
        />
        <path
          style={{ fill: color }}
          d="M318.66,263.57,263.54,382.66H378.26l55.23-119.09ZM365.13,343H313.9l24.62-53.2H389.8Z"
          transform="translate(-25.66 -23.16)"
        />
        <path
          style={{ fill: color }}
          d="M442.16,263.58,387,382.66H501.76L557,263.58Zm54.91,37.53c-2.5,7.95-10.91,16.31-19.38,18.23l-3.59,50.81H436.79L469,319.47c-7.54-1.72-10.39-10.21-7.29-18.36,3.6-9.46,14.18-17.12,23.63-17.12S500,291.65,497.07,301.11Z"
          transform="translate(-25.66 -23.16)"
        />
        <path
          style={{ fill: color }}
          d="M566.11,263.57,511,382.66H625.71l55.23-119.09ZM612.59,343H561.36l24.6-53.2h51.3Z"
          transform="translate(-25.66 -23.16)"
        />
        <polygon
          className="logo__anim"
          name="t-bottom"
          style={{
            display: `${textParts.tBottom.display}`,
            fill: color,
            transform: `scale(${textParts.tBottom.scaleX}, ${textParts.tBottom.scaleY}) translate(${textParts.tBottom.x}rem, ${textParts.tBottom.y}rem)`,
          }}
          points="758.51 240.41 702.82 359.49 622.91 359.49 678.1 240.41 758.51 240.41"
        />
        <polygon
          className="logo__anim"
          name="t-middle"
          style={{
            display: `${textParts.tMiddle.display}`,
            fill: color,
            transform: `scale(${textParts.tMiddle.scaleX}, ${textParts.tMiddle.scaleY}) translate(${textParts.tMiddle.x}rem, ${textParts.tMiddle.y}rem)`,
          }}
          points="791.15 170.35 768.06 220.11 768 220.11 758.51 240.41 678.1 240.41 687.51 220.11 687.42 220.11 710.32 170.35 791.15 170.35"
        />
        <polygon
          className="logo__anim"
          name="t-left"
          style={{
            display: `${textParts.tLeft.display}`,
            fill: color,
            transform: `scale(${textParts.tLeft.scaleX}, ${textParts.tLeft.scaleY}) translate(${textParts.tLeft.x}rem, ${textParts.tLeft.y}rem)`,
          }}
          points="710.32 170.35 687.42 220.11 607.95 220.11 631.12 170.35 710.32 170.35"
        />
        <polygon
          className="logo__anim"
          name="t-right"
          style={{
            display: `${textParts.tRight.display}`,
            fill: color,
            transform: `scale(${textParts.tRight.scaleX}, ${textParts.tRight.scaleY}) translate(${textParts.tRight.x}rem, ${textParts.tRight.y}rem)`,
          }}
          points="875.95 170.35 794.64 219.97 768.06 220.11 791.15 170.35 875.95 170.35"
        />
        <polygon
          className="logo__anim"
          name="t-top"
          style={{
            display: `${textParts.tTop.display}`,
            fill: color,
            transform: `scale(${textParts.tTop.scaleX}, ${textParts.tTop.scaleY}) translate(${textParts.tTop.x}rem, ${textParts.tTop.y}rem)`,
          }}
          points="843.15 57.76 791.03 170.35 710.58 170.35 738.66 109.61 843.15 57.76"
        />
        <polygon
          className="logo__anim"
          name="y-tip"
          style={{
            display: `${textParts.yTip.display}`,
            fill: color,
            transform: `scale(${textParts.yTip.scaleX}, ${textParts.yTip.scaleY}) translate(${textParts.yTip.x}rem, ${textParts.yTip.y}rem)`,
          }}
          points="887.68 181.28 860.31 240.41 791.82 240.41 887.68 181.28"
        />
        <polygon
          className="logo__anim"
          name="y-top-1"
          style={{
            display: `${textParts.yTopOne.display}`,
            fill: color,
            transform: `scale(${textParts.yTopOne.scaleX}, ${textParts.yTopOne.scaleY}) translate(${textParts.yTopOne.x}rem, ${textParts.yTopOne.y}rem)`,
          }}
          points="828.9 308.27 823.03 320.94 823.05 320.94 805.26 359.51 725.18 359.51 775.82 250.28 791.82 240.41 860.31 240.41 828.9 308.27"
        />
        <polygon
          className="logo__anim"
          name="y-middle-1"
          style={{
            display: `${textParts.yMiddleOne.display}`,
            fill: color,
            transform: `scale(${textParts.yMiddleOne.scaleX}, ${textParts.yMiddleOne.scaleY}) translate(${textParts.yMiddleOne.x}rem, ${textParts.yMiddleOne.y}rem)`,
          }}
          points="878.13 320.94 860.27 359.51 805.26 359.51 823.05 320.94 878.13 320.94"
        />
        <polygon
          className="logo__anim"
          name="y-bottom-3"
          style={{
            display: `${textParts.yBottomThree.display}`,
            fill: color,
            transform: `scale(${textParts.yBottomThree.scaleX}, ${textParts.yBottomThree.scaleY}) translate(${textParts.yBottomThree.x}rem, ${textParts.yBottomThree.y}rem)`,
          }}
          points="982.89 267.79 940.33 359.57 860.26 359.57 860.29 359.51 860.27 359.51 878.13 320.94 878.16 320.94 902.8 267.79 982.89 267.79"
        />
        <polygon
          className="logo__anim"
          name="y-bottom-2"
          style={{
            display: `${textParts.yBottomTwo.display}`,
            fill: color,
            transform: `scale(${textParts.yBottomTwo.scaleX}, ${textParts.yBottomTwo.scaleY}) translate(${textParts.yBottomTwo.x}rem, ${textParts.yBottomTwo.y}rem)`,
          }}
          points="940.33 359.57 885.14 478.58 805.16 478.58 860.26 359.57 940.33 359.57"
        />
        <polygon
          className="logo__anim"
          name="y-bottom-1"
          style={{
            display: `${textParts.yBottomOne.display}`,
            fill: color,
            transform: `scale(${textParts.yBottomOne.scaleX}, ${textParts.yBottomOne.scaleY}) translate(${textParts.yBottomOne.x}rem, ${textParts.yBottomOne.y}rem)`,
          }}
          points="885.14 478.58 827.72 602.41 740.02 619.25 805.16 478.58 885.14 478.58"
        />
      </svg>
    </div>
  );
};




export const LoootyLogoStatic = ({ style, color = "#8383b2" }) => {
  const logoCol = color;

  const [yScroll, setYScroll] = useState(1);
  const [textParts, setTextParts] = useState({
    lBottomRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    lBottomLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    lMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    lTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tBottom: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tMiddle: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tLeft: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tRight: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    tTop: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yTip: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yTopOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yMiddleOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yBottomThree: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yBottomTwo: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
    yBottomOne: { x: 0, y: 0, scaleX: 1, scaleY: 1, display: "block" },
  });

  const handleScroll = (event) => {
    setYScroll(window.scrollY);
  };

  

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));

    return () => {
        window.removeEventListener("scroll", (e) => handleScroll(e))
    }
  }, []);

  return (
    <div
      style={{
        width: "7rem",
        transform: "scale(.7)",
        height: "100%",
        alignItems: "center",
        display: "flex",
        zIndex: 44,
        justifyContent: "center",
        ...style,
      }}
      className="loooty-logo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 982.89 619.25">
        <title>logo slices</title>
        <polygon
          className="logo__anim"
          name="l-bottom-right"
          style={{
            display: `${textParts.lBottomRight.display}`,
            fill: color,
            transform: `scale(${textParts.lBottomRight.scaleX}, ${textParts.lBottomRight.scaleY}) translate(${textParts.lBottomRight.x}rem, ${textParts.lBottomRight.y}rem)`,
          }}
          points="253.71 276.37 215.21 359.49 79.99 359.49 118.73 276.37 253.71 276.37"
        />
        <polygon
          className="logo__anim"
          name="l-bottom-left"
          style={{
            display: `${textParts.lBottomLeft.display}`,
            fill: color,
            transform: `scale(${textParts.lBottomLeft.scaleX}, ${textParts.lBottomLeft.scaleY}) translate(${textParts.lBottomLeft.x}rem, ${textParts.lBottomLeft.y}rem)`,
          }}
          points="118.73 276.37 79.99 359.49 0 359.49 38.5 276.37 118.73 276.37"
        />
        <polygon
          className="logo__anim"
          name="l-middle"
          style={{
            display: `${textParts.lMiddle.display}`,
            fill: color,
            transform: `scale(${textParts.lMiddle.scaleX}, ${textParts.lMiddle.scaleY}) translate(${textParts.lMiddle.x}rem, ${textParts.lMiddle.y}rem)`,
          }}
          points="174.03 156.84 118.94 275.92 118.73 276.37 38.5 276.37 93.85 156.84 174.03 156.84"
        />
        <polygon
          className="logo__anim"
          name="l-top"
          style={{
            display: `${textParts.lTop.display}`,
            fill: color,
            transform: `scale(${textParts.lTop.scaleX}, ${textParts.lTop.scaleY}) translate(${textParts.lTop.x}rem, ${textParts.lTop.y}rem)`,
          }}
          points="246.59 0 174.03 156.84 93.85 156.84 143.31 50.05 246.59 0"
        />
        <path
          style={{ fill: color }}
          d="M318.66,263.57,263.54,382.66H378.26l55.23-119.09ZM365.13,343H313.9l24.62-53.2H389.8Z"
          transform="translate(-25.66 -23.16)"
        />
        <path
          style={{ fill: color }}
          d="M442.16,263.58,387,382.66H501.76L557,263.58Zm54.91,37.53c-2.5,7.95-10.91,16.31-19.38,18.23l-3.59,50.81H436.79L469,319.47c-7.54-1.72-10.39-10.21-7.29-18.36,3.6-9.46,14.18-17.12,23.63-17.12S500,291.65,497.07,301.11Z"
          transform="translate(-25.66 -23.16)"
        />
        <path
          style={{ fill: color }}
          d="M566.11,263.57,511,382.66H625.71l55.23-119.09ZM612.59,343H561.36l24.6-53.2h51.3Z"
          transform="translate(-25.66 -23.16)"
        />
        <polygon
          className="logo__anim"
          name="t-bottom"
          style={{
            display: `${textParts.tBottom.display}`,
            fill: color,
            transform: `scale(${textParts.tBottom.scaleX}, ${textParts.tBottom.scaleY}) translate(${textParts.tBottom.x}rem, ${textParts.tBottom.y}rem)`,
          }}
          points="758.51 240.41 702.82 359.49 622.91 359.49 678.1 240.41 758.51 240.41"
        />
        <polygon
          className="logo__anim"
          name="t-middle"
          style={{
            display: `${textParts.tMiddle.display}`,
            fill: color,
            transform: `scale(${textParts.tMiddle.scaleX}, ${textParts.tMiddle.scaleY}) translate(${textParts.tMiddle.x}rem, ${textParts.tMiddle.y}rem)`,
          }}
          points="791.15 170.35 768.06 220.11 768 220.11 758.51 240.41 678.1 240.41 687.51 220.11 687.42 220.11 710.32 170.35 791.15 170.35"
        />
        <polygon
          className="logo__anim"
          name="t-left"
          style={{
            display: `${textParts.tLeft.display}`,
            fill: color,
            transform: `scale(${textParts.tLeft.scaleX}, ${textParts.tLeft.scaleY}) translate(${textParts.tLeft.x}rem, ${textParts.tLeft.y}rem)`,
          }}
          points="710.32 170.35 687.42 220.11 607.95 220.11 631.12 170.35 710.32 170.35"
        />
        <polygon
          className="logo__anim"
          name="t-right"
          style={{
            display: `${textParts.tRight.display}`,
            fill: color,
            transform: `scale(${textParts.tRight.scaleX}, ${textParts.tRight.scaleY}) translate(${textParts.tRight.x}rem, ${textParts.tRight.y}rem)`,
          }}
          points="875.95 170.35 794.64 219.97 768.06 220.11 791.15 170.35 875.95 170.35"
        />
        <polygon
          className="logo__anim"
          name="t-top"
          style={{
            display: `${textParts.tTop.display}`,
            fill: color,
            transform: `scale(${textParts.tTop.scaleX}, ${textParts.tTop.scaleY}) translate(${textParts.tTop.x}rem, ${textParts.tTop.y}rem)`,
          }}
          points="843.15 57.76 791.03 170.35 710.58 170.35 738.66 109.61 843.15 57.76"
        />
        <polygon
          className="logo__anim"
          name="y-tip"
          style={{
            display: `${textParts.yTip.display}`,
            fill: color,
            transform: `scale(${textParts.yTip.scaleX}, ${textParts.yTip.scaleY}) translate(${textParts.yTip.x}rem, ${textParts.yTip.y}rem)`,
          }}
          points="887.68 181.28 860.31 240.41 791.82 240.41 887.68 181.28"
        />
        <polygon
          className="logo__anim"
          name="y-top-1"
          style={{
            display: `${textParts.yTopOne.display}`,
            fill: color,
            transform: `scale(${textParts.yTopOne.scaleX}, ${textParts.yTopOne.scaleY}) translate(${textParts.yTopOne.x}rem, ${textParts.yTopOne.y}rem)`,
          }}
          points="828.9 308.27 823.03 320.94 823.05 320.94 805.26 359.51 725.18 359.51 775.82 250.28 791.82 240.41 860.31 240.41 828.9 308.27"
        />
        <polygon
          className="logo__anim"
          name="y-middle-1"
          style={{
            display: `${textParts.yMiddleOne.display}`,
            fill: color,
            transform: `scale(${textParts.yMiddleOne.scaleX}, ${textParts.yMiddleOne.scaleY}) translate(${textParts.yMiddleOne.x}rem, ${textParts.yMiddleOne.y}rem)`,
          }}
          points="878.13 320.94 860.27 359.51 805.26 359.51 823.05 320.94 878.13 320.94"
        />
        <polygon
          className="logo__anim"
          name="y-bottom-3"
          style={{
            display: `${textParts.yBottomThree.display}`,
            fill: color,
            transform: `scale(${textParts.yBottomThree.scaleX}, ${textParts.yBottomThree.scaleY}) translate(${textParts.yBottomThree.x}rem, ${textParts.yBottomThree.y}rem)`,
          }}
          points="982.89 267.79 940.33 359.57 860.26 359.57 860.29 359.51 860.27 359.51 878.13 320.94 878.16 320.94 902.8 267.79 982.89 267.79"
        />
        <polygon
          className="logo__anim"
          name="y-bottom-2"
          style={{
            display: `${textParts.yBottomTwo.display}`,
            fill: color,
            transform: `scale(${textParts.yBottomTwo.scaleX}, ${textParts.yBottomTwo.scaleY}) translate(${textParts.yBottomTwo.x}rem, ${textParts.yBottomTwo.y}rem)`,
          }}
          points="940.33 359.57 885.14 478.58 805.16 478.58 860.26 359.57 940.33 359.57"
        />
        <polygon
          className="logo__anim"
          name="y-bottom-1"
          style={{
            display: `${textParts.yBottomOne.display}`,
            fill: color,
            transform: `scale(${textParts.yBottomOne.scaleX}, ${textParts.yBottomOne.scaleY}) translate(${textParts.yBottomOne.x}rem, ${textParts.yBottomOne.y}rem)`,
          }}
          points="885.14 478.58 827.72 602.41 740.02 619.25 805.16 478.58 885.14 478.58"
        />
      </svg>
    </div>
  );
};

export default LoootyLogo;
