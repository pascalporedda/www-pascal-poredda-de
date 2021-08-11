export namespace InstagramApi {
  export interface Response {
    seo_category_infos: Array<string[]>;
    logging_page_id: string;
    show_suggested_profiles: boolean;
    show_follow_dialog: boolean;
    graphql: Graphql;
    toast_content_on_load: null;
    show_view_shop: boolean;
    profile_pic_edit_sync_props: null;
    always_show_message_button_to_pro_account: boolean;
  }

  export interface Graphql {
    user: GraphqlUser;
  }

  export interface GraphqlUser {
    biography: string;
    blocked_by_viewer: boolean;
    restricted_by_viewer: boolean;
    country_block: boolean;
    external_url: string;
    external_url_linkshimmed: string;
    edge_followed_by: EdgeFollowClass;
    fbid: string;
    followed_by_viewer: boolean;
    edge_follow: EdgeFollowClass;
    follows_viewer: boolean;
    full_name: string;
    has_ar_effects: boolean;
    has_clips: boolean;
    has_guides: boolean;
    has_channel: boolean;
    has_blocked_viewer: boolean;
    highlight_reel_count: number;
    has_requested_viewer: boolean;
    hide_like_and_view_counts: boolean;
    id: string;
    is_business_account: boolean;
    is_professional_account: boolean;
    is_joined_recently: boolean;
    business_address_json: string;
    business_contact_method: null;
    business_email: string;
    business_phone_number: null;
    business_category_name: null;
    overall_category_name: null;
    category_enum: null;
    category_name: string;
    is_private: boolean;
    is_verified: boolean;
    edge_mutual_followed_by: EdgeMutualFollowedBy;
    profile_pic_url: string;
    profile_pic_url_hd: string;
    requested_by_viewer: boolean;
    should_show_category: boolean;
    should_show_public_contacts: boolean;
    username: string;
    connected_fb_page: null;
    edge_felix_combined_post_uploads: EdgeFelixCombinedDraftUploadsClass;
    edge_felix_combined_draft_uploads: EdgeFelixCombinedDraftUploadsClass;
    edge_felix_video_timeline: EdgeFelixCombinedDraftUploadsClass;
    edge_felix_drafts: EdgeFelixCombinedDraftUploadsClass;
    edge_felix_pending_post_uploads: EdgeFelixCombinedDraftUploadsClass;
    edge_felix_pending_draft_uploads: EdgeFelixCombinedDraftUploadsClass;
    edge_owner_to_timeline_media: EdgeFelixCombinedDraftUploadsClass;
    edge_saved_media: EdgeFelixCombinedDraftUploadsClass;
    edge_media_collections: EdgeFelixCombinedDraftUploadsClass;
  }

  export interface EdgeFelixCombinedDraftUploadsClass {
    count: number;
    page_info: PageInfo;
    edges: EdgeFelixCombinedDraftUploadsEdge[];
  }

  export interface EdgeFelixCombinedDraftUploadsEdge {
    node: PurpleNode;
  }

  export interface PurpleNode {
    __typename: Typename;
    id: string;
    shortcode: string;
    dimensions: Dimensions;
    display_url: string;
    edge_media_to_tagged_user: EdgeMediaToTaggedUser;
    fact_check_overall_rating: null;
    fact_check_information: null;
    gating_info: null;
    sharing_friction_info: SharingFrictionInfo;
    media_overlay_info: null;
    media_preview: null | string;
    owner: Owner;
    is_video: boolean;
    has_upcoming_event: boolean;
    accessibility_caption: null | string;
    dash_info?: DashInfo;
    has_audio?: boolean;
    tracking_token?: string;
    video_url?: string;
    video_view_count?: number;
    edge_media_to_caption: EdgeMediaToCaption;
    edge_media_to_comment: EdgeFollowClass;
    comments_disabled: boolean;
    taken_at_timestamp: number;
    edge_liked_by: EdgeFollowClass;
    edge_media_preview_like: EdgeFollowClass;
    location: Location | null;
    thumbnail_src: string;
    thumbnail_resources: ThumbnailResource[];
    felix_profile_grid_crop?: null;
    product_type?: string;
    clips_music_attribution_info?: ClipsMusicAttributionInfo;
    edge_sidecar_to_children?: EdgeSidecarToChildren;
  }

  export enum Typename {
    GraphImage = 'GraphImage',
    GraphSidecar = 'GraphSidecar',
    GraphVideo = 'GraphVideo',
  }

  export interface ClipsMusicAttributionInfo {
    artist_name: string;
    song_name: string;
    uses_original_audio: boolean;
    should_mute_audio: boolean;
  }

  export interface DashInfo {
    is_dash_eligible: boolean;
    video_dash_manifest: string;
    number_of_qualities: number;
  }

  export interface Dimensions {
    height: number;
    width: number;
  }

  export interface EdgeFollowClass {
    count: number;
  }

  export interface EdgeMediaToCaption {
    edges: EdgeMediaToCaptionEdge[];
  }

  export interface EdgeMediaToCaptionEdge {
    node: FluffyNode;
  }

  export interface FluffyNode {
    text: string;
  }

  export interface EdgeMediaToTaggedUser {
    edges: EdgeMediaToTaggedUserEdge[];
  }

  export interface EdgeMediaToTaggedUserEdge {
    node: TentacledNode;
  }

  export interface TentacledNode {
    user: NodeUser;
    x: number;
    y: number;
  }

  export interface NodeUser {
    full_name: string;
    id: string;
    is_verified: boolean;
    profile_pic_url: string;
    username: string;
  }

  export interface EdgeSidecarToChildren {
    edges: EdgeSidecarToChildrenEdge[];
  }

  export interface EdgeSidecarToChildrenEdge {
    node: StickyNode;
  }

  export interface StickyNode {
    __typename: Typename;
    id: string;
    shortcode: string;
    dimensions: Dimensions;
    display_url: string;
    edge_media_to_tagged_user: EdgeMediaToTaggedUser;
    fact_check_overall_rating: null;
    fact_check_information: null;
    gating_info: null;
    sharing_friction_info: SharingFrictionInfo;
    media_overlay_info: null;
    media_preview: string;
    owner: Owner;
    is_video: boolean;
    has_upcoming_event: boolean;
    accessibility_caption: string;
  }

  export interface Owner {
    id: string;
    username: string;
  }

  export interface SharingFrictionInfo {
    should_have_sharing_friction: boolean;
    bloks_app_url: null;
  }

  export interface Location {
    id: string;
    has_public_page: boolean;
    name: string;
    slug: string;
  }

  export interface ThumbnailResource {
    src: string;
    config_width: number;
    config_height: number;
  }

  export interface PageInfo {
    has_next_page: boolean;
    end_cursor: null | string;
  }

  export interface EdgeMutualFollowedBy {
    count: number;
    edges: any[];
  }
}
