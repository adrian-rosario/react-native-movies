import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { allStyle } from "../../styles/allStyle";
import Header from "../view-ui/Header";
import { ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listMoviesAction } from "../../store/actions/movie-actions";
import { listRandomRatingAction } from "../../store/actions/movie-actions";
import { Image } from "react-native";
import { common_constants } from "../../common/common_constants";
import Stars from "../view-ui/Stars";

export default function Mission() {
  const dispatch = useDispatch();
  const randomRatingState = useSelector((state) => state.movieListRandomRating);
  const {
    ratingDetails,
    // loading: loadingRandomRating,
    // error: errorRandomRating,
  } = randomRatingState;

  const [rating, setRating] = useState({});
  const [ratingSet, setRatingSet] = useState(false);

  const movieListState = useSelector((state) => state.movieList);
  const { movies /* , loading, error */ } = movieListState;

  const [theMovies, setTheMovies] = useState([]);

  const [reviewMovie, setReviewMovie] = useState({});

  useEffect(() => {
    if (!movies || movies.length < 1) {
      dispatch(listMoviesAction());
    }

    if (!ratingSet) {
      dispatch(listRandomRatingAction());
    }

    if (ratingDetails && ratingDetails.user) {
      setRatingSet(true);
    }

    if (movies && movies.length >= 1) {
      setTheMovies(movies);
    }

    if (ratingDetails && ratingDetails.user && movies && movies.length >= 1) {
      const theMovie = theMovies.find(
        (item) => item.id === rating.rating.movie
      );

      setRating(ratingDetails);
      setReviewMovie(theMovie);
    }
  }, [ratingSet, dispatch, movies, ratingDetails]);

  // highlight a different movie when user end-scrolls
  const handleEndScroll = ({ nativeEvent }) => {
    const scrollY = nativeEvent.contentOffset.y;
    const bottomThreshold = 500;
    const topThreshold = -50;

    if (scrollY > bottomThreshold || scrollY < topThreshold) {
      setReviewMovie({});
      setRatingSet(false);
    }
  };

  return (
    <LinearGradient
      colors={["#002b36", "#000000", "#002b36"]}
      start={{ x: 0, y: 0.25 }}
      end={{ x: 0, y: 0.75 }}
      style={allStyle.gradient}
    >
      <View>
        <Header />

        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScrollEndDrag={handleEndScroll}
        >
          <View style={[allStyle.linedJar, { marginTop: 20 }]}>
            {/* top */}
            <View style={styles.cardTop}>
              <View style={{ flex: 1 }}>
                <Text style={[allStyle.text, allStyle.bold]}>Mission</Text>
              </View>
              <View
                style={{ justifyContent: "flex-end", paddingRight: 8 }}
              ></View>
            </View>

            {/* bottom */}
            <View style={styles.cardBottom}>
              <View style={{ marginLeft: 10, marginTop: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Text
                        style={[
                          {
                            marginBottom: 8,
                            flexDirection: "row",
                            flexWrap: "wrap",
                          },
                        ]}
                      >
                        <Text
                          style={[
                            allStyle.text,
                            allStyle.bold,
                            {
                              fontSize: 18, // Make the first letter larger
                            },
                          ]}
                        >
                          T
                        </Text>
                        <Text
                          style={[
                            allStyle.text,
                            {
                              lineHeight: 16,
                            },
                          ]}
                        >
                          his app is dedicated to preserving and exploring the
                          rich legacy of classic cinematography and the timeless
                          techniques that have shaped the way we experience
                          storytelling through film. With a particular focus on
                          the art of film noir, the site serves as a hub for
                          both seasoned cinephiles and budding filmmakers who
                          wish to dive deep into the visual language of this
                          genre. Film noir, with its signature use of
                          high-contrast lighting, shadow play, and atmospheric
                          tension, offers a unique lens through which to
                          appreciate the craftsmanship of cinematography. By
                          analyzing and celebrating these techniques, the site
                          aims to foster a deeper understanding of how visuals
                          can influence mood, narrative, and character
                          development in ways that continue to resonate in
                          contemporary cinema.
                        </Text>
                      </Text>

                      {movies &&
                        movies.length >= 1 &&
                        rating &&
                        rating.rating &&
                        rating.rating.movie && (
                          <View
                            style={{
                              marginTop: 10,
                              marginBottom: 10,
                              width: "100%",
                            }}
                          >
                            {reviewMovie && reviewMovie.image && (
                              <View>
                                {/* line */}
                                <View
                                  style={[
                                    styles.movieHighlightLine,
                                    {
                                      marginBottom: 12,
                                    },
                                  ]}
                                />

                                <View
                                  style={{
                                    width: "100%",
                                    alignItems: "center",
                                  }}
                                >
                                  <Image
                                    style={{ width: 250, height: 150 }}
                                    source={{
                                      uri: `${common_constants.BASE_URL}${reviewMovie.image}`,
                                    }}
                                  />
                                  <Text style={allStyle.text}>
                                    {reviewMovie.title}, {reviewMovie.year}
                                  </Text>

                                  {reviewMovie &&
                                    reviewMovie.number_of_ratings > 0 && (
                                      <View>
                                        <Stars
                                          displayText={false}
                                          reviews={
                                            reviewMovie.number_of_ratings
                                          }
                                          rating={reviewMovie.ratings_average}
                                        />
                                      </View>
                                    )}
                                </View>

                                {/* line */}
                                <View
                                  style={[
                                    styles.movieHighlightLine,
                                    {
                                      marginBottom: 8,
                                      marginTop: 8,
                                    },
                                  ]}
                                />
                              </View>
                            )}
                          </View>
                        )}

                      <Text style={[allStyle.text, { marginBottom: 10 }]}>
                        For film noir enthusiasts, this platform is more than
                        just a space to admire the genre&apos;s iconic
                        works—it&apos;s an interactive environment where fans
                        can engage with critical discussions, watch rare clips,
                        and learn about the innovative cinematographic choices
                        made by legendary directors like Fritz Lang, Orson
                        Welles, and John Huston. The website seeks to bring to
                        light the often underappreciated artistry behind these
                        films, particularly the collaboration between directors,
                        cinematographers, and production designers. It
                        emphasizes how noir&apos;s distinctive visual style,
                        marked by chiaroscuro lighting and unconventional camera
                        angles, became a language of its own that transcended
                        its 1940s origins and continues to influence filmmakers
                        today.
                      </Text>
                      <Text style={[allStyle.text]}>
                        By combining historical insights with contemporary
                        applications, this platform empowers filmmakers and film
                        lovers to understand the enduring power of film
                        noir&apos;s visual techniques. The website&apos;s
                        mission is not only to educate but also to inspire a new
                        generation of creators to experiment with the bold,
                        evocative style of noir. Through tutorials, detailed
                        analysis, and interviews with cinematographers, it
                        fosters a community that appreciates the nuanced art of
                        lighting, composition, and framing. Whether you&apos;re
                        a student of film or simply a fan who loves to explore
                        the undercurrents of classic cinema, this site provides
                        an invaluable resource for anyone passionate about the
                        intersection of storytelling and cinematographic
                        mastery.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cardTop: {
    flexDirection: "row",
    marginBottom: 1,
    height: 32,
    alignItems: "center",
    borderTopEndRadius: 5,
    borderTopLeftRadius: 5,
    paddingLeft: 8,
    backgroundColor: "rgba(7, 54, 66, 1);",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(42, 161, 152, 1)",
  },
  cardBottom: {
    backgroundColor: "rgba(0,0,0,.5)",
    paddingBottom: 10,
    paddingRight: 8,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  movieHighlightLine: {
    borderBottomColor: "rgba(42, 161, 152, 1)",
    borderBottomWidth: 1,
    width: "80%",
    marginLeft: "10%",
  },
});
