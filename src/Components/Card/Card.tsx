import { CardContent, Stack, Typography } from '@mui/material'
import { CardCustom, EditButtonCustom, cardContentCustomStyles, iconStyles } from "./styles"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useRecordContext } from 'react-admin';
import { MUI_COMPONENTS_PROPS } from '../../Common';

const {
  stack,
  typographyBody1,
  justifyContentCenter,
  flexWrap,
  typographyH5
} = MUI_COMPONENTS_PROPS;


const Card = () => {
  const record = useRecordContext();
  return (
    <CardCustom>
      <Stack direction={stack.direction.row} alignItems={stack.alignItems.center} justifyContent={stack.alignItems.center}>
        <AutoStoriesIcon sx={iconStyles()} />
      </Stack>
      <CardContent sx={cardContentCustomStyles}>
        <Stack
          direction={stack.direction.column}
          alignItems={stack.alignItems.center}
          flexWrap={flexWrap.wrap}
          justifyContent={justifyContentCenter}
          gap='1rem'
        >
          <Typography gutterBottom variant={typographyH5} component={"div"}>
            {record ? record?.title || record?.name : null}
          </Typography>
          <Typography variant={typographyBody1} color="text.secondary">
            {record ? record?.author || record?.nationality : null}
          </Typography>
          <Typography variant={typographyBody1} color="text.secondary">
            {record ? record?.postDate || record?.yearOfBirth : null}
          </Typography>
        </Stack>
        <Stack direction={stack.direction.column} alignItems={stack.alignItems.center} gap='1rem'>
          <EditButtonCustom label=''  />
        </Stack>
      </CardContent>
    </CardCustom>
  )
}

export default Card