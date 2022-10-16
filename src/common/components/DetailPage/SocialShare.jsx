import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton,
  FacebookShareButton, HatenaIcon,
  HatenaShareButton, InstapaperIcon,
  InstapaperShareButton,
  LineShareButton, LinkedinIcon,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton, PinterestIcon,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton, TelegramIcon,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton, WhatsappIcon,
  WhatsappShareButton,
  WorkplaceShareButton
} from "next-share";

const SocialShare = (props) => {
  const { url, title, hashtag, image } = props
  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>

      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <PinterestShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <TelegramShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <HatenaShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <HatenaIcon size={32} round />
      </HatenaShareButton>
      <InstapaperShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>

      <FacebookMessengerShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      <WhatsappShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        image={image}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;