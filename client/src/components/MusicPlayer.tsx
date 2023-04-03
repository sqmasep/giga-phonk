import {
  Box,
  Container,
  IconButton,
  LinearProgress,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Pause, PlayArrow, SkipPrevious } from "@mui/icons-material";
import React, { useMemo } from "react";
import { useAudio } from "react-use";
import usePlayingMusicStore from "@/store/playing";
import {
  format,
  formatDuration,
  intervalToDuration,
  lightFormat,
} from "date-fns";
import { motion } from "framer-motion";

interface PlayerProps {}

const MotionBox = motion(Box);

const MusicPlayer: React.FC<PlayerProps> = ({}) => {
  const { src, title } = usePlayingMusicStore();
  const [audio, state, controls, ref] = useAudio({
    src,
    autoPlay: true,
  });

  const formatSecondsToInterval = (duration: number) =>
    intervalToDuration({
      start: 0,
      end: duration * 1000,
    });

  const zeroPad = (num: number) => String(num).padStart(2, "0");
  const formatDuration = ({
    minutes,
    seconds,
  }: {
    minutes: number;
    seconds: number;
  }) => `${zeroPad(minutes)}:${zeroPad(seconds)}`;

  const formattedDuration = formatDuration(
    formatSecondsToInterval(state.duration)
  );
  const formattedTime = formatDuration(formatSecondsToInterval(state.time));

  const handleChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    const val = typeof value === "object" ? value[0] : value;
    (val * 100) / state.duration;
    controls.seek(val);
  };

  const togglePause = () => {
    state.paused ? controls.play() : controls.pause();
  };

  if (!src.length) return null;

  return (
    <MotionBox
      width='100%'
      py={3}
      position='fixed'
      bottom={0}
      left={0}
      borderTop={theme => `1px solid ${theme.palette.primary.light}`}
      sx={{ backgroundColor: theme => theme.palette.background.default }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
    >
      <Container>
        <Typography>{title}</Typography>
        <Stack
          direction='row'
          gap={2}
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack direction='row' gap={2}>
            <IconButton onClick={() => controls.seek(0)}>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={togglePause}>
              {state.paused ? <PlayArrow /> : <Pause />}
            </IconButton>
          </Stack>
          {audio}
          {state && (
            <>
              <Box width={80}>{formattedTime}</Box>
              <Slider
                value={state.time}
                onChange={handleChange}
                max={state.duration}
              />

              {formattedDuration}
            </>
          )}
        </Stack>
      </Container>
    </MotionBox>
  );
};

export default MusicPlayer;
