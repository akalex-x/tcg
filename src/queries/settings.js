import { gql } from '@apollo/client';

export const QUERY_GLOBAL_SETTINGS = gql`
    query globalSettings {
        themeGeneralSettings {
            settings_header {
                header {
                    bannerMessage
                }
            }
        }
    }
`;