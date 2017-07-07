module Pages.ElvantoImport.Update exposing (update)

import DjangoSend exposing (CSRFToken, post)
import Helpers exposing (handleNotSaved)
import Http
import Json.Decode as Decode
import Messages exposing (Msg)
import Models exposing (Model)
import Pages.ElvantoImport.Messages exposing (ElvantoMsg(..))
import Pages.Fragments.Notification exposing (createInfo, createSuccess)
import Urls


update : ElvantoMsg -> Model -> ( Model, List (Cmd Msg) )
update msg model =
    case msg of
        PullGroups ->
            let
                ( notifications, destroyNotifCmd ) =
                    createInfo model.notifications "Groups are being imported, it may take a couple of minutes"
            in
            ( { model | notifications = notifications }
            , [ buttonReq model.settings.csrftoken Urls.api_act_pull_elvanto_groups
              , destroyNotifCmd
              ]
            )

        FetchGroups ->
            let
                ( notifications, destroyNotifCmd ) =
                    createSuccess model.notifications "Groups are being fetched, it may take a couple of minutes"
            in
            ( { model | notifications = notifications }
            , [ buttonReq model.settings.csrftoken Urls.api_act_fetch_elvanto_groups
              , destroyNotifCmd
              ]
            )

        ReceiveButtonResp (Ok _) ->
            ( model, [] )

        ReceiveButtonResp (Err _) ->
            handleNotSaved model


buttonReq : CSRFToken -> String -> Cmd Msg
buttonReq csrf url =
    post csrf url [] (Decode.succeed True)
        |> Http.send (Messages.ElvantoMsg << ReceiveButtonResp)
