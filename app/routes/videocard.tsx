import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import '../styles/ControlIcons.css';
import { useState } from 'react';


export default function MediaControlCard() {
  const theme = useTheme();
  // 1. Add state tracking for playback
  const [isPlaying, setIsPlaying] = useState(false);

  // Convert watch URL to embed format for iframes
  const embedUrl = "https://www.youtube.com/watch?v=F34Vlqtv0lQ?autoplay=1".replace('watch?v=', 'embed/');

  return (
    <Card sx={{ display: 'inline-block' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
            <h3>Featured Video: SRA Get Covered</h3>
            <p>Congratulations to our <strong>Affordable Care Act program team</strong>...</p>
          </Typography>
        </CardContent>
      </Box>

      {/* 2. Conditionally swap out the static image for an iframe player */}
      {isPlaying ? (
        <CardMedia
          component="iframe"
          sx={{ width: 800, height: 450, border: 0 }}
          src={embedUrl}
          title="Affordable Care Act Video Player"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <CardMedia
          component="img"
          sx={{ width: 800, cursor: 'pointer' }}
          image="../../affordablecarescreen.png"
          onClick={() => setIsPlaying(true)}
          alt="Affordable Care Act Video Thumbnail"
        />
      )}

      <Box sx={{ display: 'block', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="previous">
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>

        {/* 3. Connect click listener and toggle icon design based on state */}
        <IconButton aria-label="play/pause" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <PauseIcon sx={{ height: 38, width: 38 }} />
          ) : (
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          )}
        </IconButton>

        <IconButton aria-label="next">
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </Box>
    </Card>
  );
}

