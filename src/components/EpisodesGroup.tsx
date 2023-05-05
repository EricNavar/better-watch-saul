import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { episodes } from '../data';
import { EpisodeCard } from './EpisodeCard';
import { FormControl, InputLabel } from '@mui/material';

export function EpisodesGroup(props: {defaultSeason: number}) {
  const [season, setSeason] = React.useState<number>(props.defaultSeason);

  const handleChange = (event: SelectChangeEvent) => {
    setSeason(Number(event.target.value));
  };

  const numberOfSeasons = 6;

  return (
    <div>
      <FormControl style={{marginBottom: 20, marginTop: 20}}>
        <InputLabel id="demo-controlled-open-select-label">Season</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue='1'
          value={String(season)}
          label="Season"
          style={{width:200}}
          onChange={handleChange}
        >
          {Array.from(Array(numberOfSeasons).keys()).map((season) =>
            <MenuItem value={season + 1}>{season + 1}</MenuItem>
          )}
        </Select>
      </FormControl>
      <br/>
      <div style={{display: 'flex', flexWrap:'wrap'}}>
        {episodes.filter(episode => episode.season_number == season).map((episode, index) =>
          <EpisodeCard {...episode} key={index} />
        )}
      </div>
    </div>
  );
}