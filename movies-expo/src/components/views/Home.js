import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listMoviesAction } from "../../store/actions/movie-actions";
import { useState } from "react";
import { allStyle } from "../../styles/allStyle";
import Header from "../view-ui/Header";
import MoviesHorizonatlScrsoll from "../view-ui/MoviesHorizonatlScrsoll";
import PullQuote from "../view-ui/PullQuote";
import MovieInfo from "../view-ui/MovieInfo";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const [displayMovie, setDisplayMovie] = useState({});
  const [displayReview, setDisplayReview] = useState();

  const movieListState = useSelector((state) => state.movieList);
  const { movies /* , loading, error */ } = movieListState;

  const dispatch = useDispatch();
  const [theMovies, setTheMovies] = useState([]);

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userDetails } = userLogin;

  useEffect(() => {
    if (!movies || movies.length < 1) {
      dispatch(listMoviesAction());
    }

    if (movies && movies.length >= 1) {
      setTheMovies(movies);
      setDisplayMovie(theMovies[0]);
    }
  }, [movies, dispatch]);

  const doSomething = (movieId, theReview) => {
    setDisplayMovie(theMovies.find((item) => item.id === movieId));
    setDisplayReview(theReview);
  };

  const scrollAreaLoadMovie = (movieId) => {
    setDisplayMovie(theMovies.find((item) => item.id === movieId));
    setDisplayReview();
  };

  return (
    <LinearGradient
      colors={["#002b36", "#000000", "#002b36"]}
      start={{ x: 0, y: 0.25 }}
      end={{ x: 0, y: 0.75 }}
      style={allStyle.gradient}
    >
      <View style={allStyle.topJar}>
        <Header />

        <PullQuote
          doSomething={(movieId, reviewId) => doSomething(movieId, reviewId)}
        />

        {theMovies && theMovies.length > 0 && (
          <>
            <MoviesHorizonatlScrsoll
              theMovies={theMovies}
              buttonAction={scrollAreaLoadMovie}
            />
            <MovieInfo
              movieObject={displayMovie}
              displayReview={displayReview}
            />
          </>
        )}

        <StatusBar style='auto' />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // item: {
  //   height: 104,
  //   flex: 1,
  //   borderBottomWidth: 1,
  //   borderColor: "rgba(0, 0, 0, 0.175)",
  // },
  // innerText: {
  //   color: "#222",
  //   paddingLeft: 10,
  // },
  // theList: {
  //   width: "100%",
  //   flex: 1,
  //   flexDirection: "column",
  //   borderTopWidth: 1,
  //   borderTopColor: "#008cba",
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#008cba",
  //   marginBottom: 40,
  // },
});
