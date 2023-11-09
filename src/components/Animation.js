import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const Animation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let engine, render, runner;

    const createMatter = () => {
      // ... Matter.js setup code (omitted for brevity) ...

      // Create engine and other Matter.js objects
      engine = Engine.create();
      // ... other Matter.js objects ...

      // ... Add objects to the Matter.js world ...

      // Add mouse control
      const mouse = Mouse.create(render.canvas);
      Events.on(engine, "afterUpdate", function () {
        if (!mouse.position.x) return;
        // smoothly move the attractor body towards the mouse
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      });

      // Start the Matter.js engine and render
      runner = Runner.create();
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);

      return {
        engine,
        runner,
        render,
        canvas: render.canvas,
        stop: function () {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
        },
        play: function () {
          Matter.Runner.run(runner, engine);
          Matter.Render.run(render);
        },
      };
    };

    const setWindowSize = () => {
      // ... Window resize code (omitted for brevity) ...
    };

    const debouncedSetWindowSize = debounce(setWindowSize, 250);

    const m = createMatter();
    setWindowSize();
    window.addEventListener("resize", debouncedSetWindowSize);

    // Cleanup effect
    return () => {
      m.stop();
      window.removeEventListener("resize", debouncedSetWindowSize);
    };
  }, []);

  return <div ref={canvasRef} id="wrapper-canvas"></div>;
};

export default Animation;
