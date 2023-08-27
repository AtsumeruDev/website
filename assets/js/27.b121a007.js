(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{306:function(e,t,a){"use strict";a.r(t);var r=a(13),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"running-in-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-in-docker"}},[e._v("#")]),e._v(" Running in Docker")]),e._v(" "),t("h2",{attrs:{id:"registers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registers"}},[e._v("#")]),e._v(" Registers")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),t("OutboundLink")],1),e._v(" images are published to the following registries:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://hub.docker.com/r/atsumerudev/atsumeru",target:"_blank",rel:"noopener noreferrer"}},[e._v("DockerHub"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"custom-block c-danger"},[t("h4",{staticClass:"c-title"}),t("p",[e._v("Images support "),t("code",[e._v("linux/arm/v7")]),e._v(" and "),t("code",[e._v("linux/arm64")]),e._v(" architectures to run, for example, on a "),t("code",[e._v("Raspberry Pi")]),e._v(", but only reading "),t("code",[e._v("ZIP")]),e._v(" archives is supported in this mode!")])]),t("h2",{attrs:{id:"version-tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-tags"}},[e._v("#")]),e._v(" Version tags")]),e._v(" "),t("p",[e._v("The image comes in different versions, which are labeled with tags:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("latest")]),e._v(": the most recent image")]),e._v(" "),t("li",[t("code",[e._v("x.y.z")]),e._v(": the image with the specified version of "),t("code",[e._v("Atsumeru")]),e._v(" (e.g. "),t("code",[e._v("1.0.2")]),e._v(").")])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("The following are sample snippets with explanations on how to create your container:")]),e._v(" "),t("h3",{attrs:{id:"using-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[e._v("#")]),e._v(" Using "),t("code",[e._v("Docker")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -d \\\n    --name=atsumeru \\\n    -p 31337:31337 \\\n    -v /path/to/your/library:/library \\\n    -v /path/to/your/config:/app/config \\\n    -v /path/to/your/db:/app/database \\\n    -v /path/to/your/cache:/app/cache \\\n    -v /path/to/your/logs:/app/logs \\\n    --restart unless-stopped \\\n    atsumerudev/atsumeru:latest\n")])])]),t("h3",{attrs:{id:"using-docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-compose"}},[e._v("#")]),e._v(" Using "),t("code",[e._v("Docker Compose")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("version: '3.3'\nservices:\n    atsumeru:\n        ports:\n            - '31337:31337'\n        volumes:\n            - '/path/to/your/library:/library'\n            - '/path/to/your/config:/app/config'\n            - '/path/to/your/db:/app/database'\n            - '/path/to/your/cache:/app/cache'\n            - '/path/to/your/logs:/app/logs'\n        restart: unless-stopped\n        image: 'atsumerudev/atsumeru:latest'\n")])])]),t("div",{staticClass:"custom-block c-warning"},[t("h4",{staticClass:"c-title"}),t("p",[e._v("After starting container, run command")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker logs atsumeru\n")])])]),t("p",[e._v("to find out  created password for "),t("code",[e._v("Admin")]),e._v(" user")])]),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Parameter")]),e._v(" "),t("th",[e._v("Function")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("--name=atsumeru")])]),e._v(" "),t("td",[e._v("Container name")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-p 31337")])]),e._v(" "),t("td",[e._v("Server access port")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-v /path/to/your/library")])]),e._v(" "),t("td",[e._v("Path to your library files")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-v /path/to/your/db")])]),e._v(" "),t("td",[e._v("Directory where server will store its databases")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-v /path/to/your/config")])]),e._v(" "),t("td",[e._v("Directory where server will store its configuration files")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-v /path/to/your/cache")])]),e._v(" "),t("td",[e._v("Directory where server will store its covers cache")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("-v /path/to/your/logs")])]),e._v(" "),t("td",[e._v("Directory where server will store its logs")])])])]),e._v(" "),t("div",{staticClass:"custom-block c-tip"},[t("h4",{staticClass:"c-title"}),t("p",[e._v("If you need to run several servers at once, create a container with a new name and parameters for each one")])]),t("h3",{attrs:{id:"updating-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-container"}},[e._v("#")]),e._v(" Updating container")]),e._v(" "),t("h3",{attrs:{id:"using-docker-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-2"}},[e._v("#")]),e._v(" Using "),t("code",[e._v("Docker")])]),e._v(" "),t("ul",[t("li",[e._v("update image: "),t("code",[e._v("docker pull atsumerudev/atsumeru")])]),e._v(" "),t("li",[e._v("stop running container: "),t("code",[e._v("docker stop atsumeru")])]),e._v(" "),t("li",[e._v("delete old container: "),t("code",[e._v("docker rm atsumeru")])]),e._v(" "),t("li",[e._v("recreate container using same parameters that were used to create the old container")]),e._v(" "),t("li",[e._v("start new container: "),t("code",[e._v("docker start atsumeru")])])]),e._v(" "),t("div",{staticClass:"custom-block c-tip"},[t("h4",{staticClass:"c-title"}),t("p",[e._v("After updating container, you can also delete old images with command"),t("br"),e._v(" "),t("code",[e._v("docker image prune")])])]),t("h3",{attrs:{id:"using-docker-compose-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-compose-2"}},[e._v("#")]),e._v(" Using "),t("code",[e._v("Docker Compose")])]),e._v(" "),t("ul",[t("li",[e._v("update all images: "),t("code",[e._v("docker-compose pull")]),e._v(" or update an individual image: "),t("code",[e._v("docker-compose pull atsumeru")])]),e._v(" "),t("li",[e._v("let "),t("code",[e._v("Compose")]),e._v(" update all containers if necessary: "),t("code",[e._v("docker-compose up -d")]),e._v(" or update an individual container: "),t("code",[e._v("docker-compose up -d atsumeru")])])]),e._v(" "),t("div",{staticClass:"custom-block c-tip"},[t("h4",{staticClass:"c-title"}),t("p",[e._v("After updating container, you can also delete old images with command"),t("br"),e._v(" "),t("code",[e._v("docker image prune")])])]),t("h3",{attrs:{id:"automatic-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatic-update"}},[e._v("#")]),e._v(" Automatic update")]),e._v(" "),t("p",[e._v("You can use "),t("a",{attrs:{href:"https://github.com/containrrr/watchtower",target:"_blank",rel:"noopener noreferrer"}},[e._v("Watchtower"),t("OutboundLink")],1),e._v(" to automatically update "),t("code",[e._v("Docker")]),e._v(" containers")])])}),[],!1,null,null,null);t.default=o.exports}}]);