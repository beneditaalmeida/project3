"use strict";

const { Router } = require("express");
const router = Router();
const routeGuardMiddleware = require("./../middleware/route-guard");
const uploadImageMiddleware = require("./../middleware/picture-upload");
const geoImageMiddleware = require("./../middleware/geo-picture-upload");

// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------

const createExerciseController = require("./../controllers/exercise/create-exercise");
const interviewQuestionController = require("../controllers/exercise/interview-question");
const listInterviewQuestionController = require("../controllers/exercise/list-interview-question");
const listGeoQuestionController = require("../controllers/exercise/list-geo-question");
const createGeoController = require("../controllers/exercise/geo-question");

router.post(
  "/exercise/create-exercise",
  routeGuardMiddleware(true),
  createExerciseController
);

router.post(
  "/exercise/create-interview-question",
  routeGuardMiddleware(true),
  interviewQuestionController
);

router.get(
  "/exercise/list-interview-question",
  routeGuardMiddleware(true),
  listInterviewQuestionController
);

router.post(
  "/exercise/create-geo",
  routeGuardMiddleware(true),
  geoImageMiddleware.fields([
    { name: "image-1" },
    { name: "image-2" },
    { name: "image-3" },
    { name: "image-4" }
  ]),
  createGeoController
);

router.get(
  "/exercise/list-geo-question",
  routeGuardMiddleware(true),
  listGeoQuestionController
);

module.exports = router;
