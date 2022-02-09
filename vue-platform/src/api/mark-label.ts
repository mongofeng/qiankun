import request from "@/utils/http";

/**
 * 本文件由code- generate根据yapi文档自动生成
 */

export type ImarkLabelCreateReqmarkLabelsInterFace = {
  alias: string; // 标签别名

  styleConfig?: string; // 标签样式配置，是一个JSON
};

export type ImarkDataMarkerCreateReqmarkResultsInterFace = {
  markLabelName: string; // 标注标签名称（注：不是别名，是名称）
};

export type ImarkDataMarkerCreateReqmarkDataInterFace = {
  dataType: string; // 数据类型（IMAGE图片；TXT文本；TILE高清影像；POINT_CLOUD点云）

  dataSourceType: string; // 数据来源类型（VDPS_DATA航测；APOS_DATA飞巡；USER_DATA用户自定义）

  key: string; // 存储key

  name: string; // 数据项名称

  width?: number; // 图片宽（图片数据类型必录）

  height?: number; // 图片高（图片数据类型必录）

  dataSourceId?: number; // 数据来源ID（高清影像数据类型必录），如：航测任务UUID等等

  extent?: string; // 数据范围，wkt

  markResults?: ImarkDataMarkerCreateReqmarkResultsInterFace[]; // 标注数据项对应的标注结果
};

export type ImarkDataMarkerPageResmarkResultsInterFace = {
  markDataId: number; // 标注数据项ID

  id: number; // 标注结果ID

  markLabelName: string; // 标注标签名称

  extent?: string; // 数据边界范围

  extraInfo?: string; // 额外的信息（如三维矢量数据的上下底的高度等，是一个JSON）
};

export type ImarkDataMarkerPageResmarkDataInterFace = {
  extent: string; // 数据边界范围

  stageToView: string; // 标注阶段展示

  stageNumberToView: number; // 标注阶段展示

  creatorUuid: string; // 创建用户UUID

  dataType: string; // 数据类型（IMAGE图片；TXT文本；TILE高清影像；POINT_CLOUD点云）

  markResults: ImarkDataMarkerPageResmarkResultsInterFace[]; // 标注数据项对应的标注结果

  creatorName: string; // 创建用户名称

  dataSourceTypeToView: string; // 数据来源展示

  markerUuid: string; // 标注用户UUID

  url: string; // 图片 url

  dataTypeToView: string; // 数据类型展示

  stage: string; // 标注阶段（MARK/20/标注；COMPLETE/100/完成）

  name: string; // 数据项名称

  id: number; // 数据项ID

  markerName: string; // 标注用户名称

  dataSourceType: string; // 数据来源类型（VDPS_DATA航测；APOS_DATA飞巡；USER_DATA用户自定义）

  key: string; // 存储key

  thumbnailUrl: string; // 图片缩略图 url
};

export type ImarkDataMarkerSubmitReqmarkDataMarkerSubmitReqInterFace = {
  markDataId: number; // 标注数据项ID

  markLabelName: string; // 标签名称（注：不是标签别名）；如果有标签名称，则为新增标注结果；否则为删除标注结果

  extent?: string; // 标注结果范围

  extraInfo?: string; // 额外的信息（如三维矢量数据的上下底的高度等，是一个JSON）
};

/**
 * 创建标注标签
 */

export type markLabelCreateRes = {
  message?: string;

  status: number; // 200成功，其余失败
};

export type markLabelCreateReq = {
  markDatasetId: number; // 数据集ID

  markLabels: ImarkLabelCreateReqmarkLabelsInterFace[]; // 标签集
};

export function markLabelCreate(data: markLabelCreateReq): Promise<markLabelCreateRes> {
  return request.post("/markLabel/create", data);
}

/**
 * 删除标注标签
 */

export type markLabelRemoveRes = {
  message?: string;

  status: number; // 200成功，其余失败
};

export type markLabelRemoveReq = number[]; // 标注标签ID数组，如[1,2,3]

export function markLabelRemove(data: markLabelRemoveReq): Promise<markLabelRemoveRes> {
  return request.post("/markLabel/remove", data);
}

/**
 * 创建标注数据项（单人标注）
 */

export type markDataMarkerCreateRes = {
  message?: string;

  status: number; // 200成功，其余失败
};

export type markDataMarkerCreateReq = {
  markDatasetId: number; // 标注数据集ID

  markData: ImarkDataMarkerCreateReqmarkDataInterFace[]; // 标注数据项
};

export function markDataMarkerCreate(data: markDataMarkerCreateReq): Promise<markDataMarkerCreateRes> {
  return request.post("/markData/marker/create", data);
}

/**
 * 标注数据项分页列表（单人标注）
 */

export type markDataMarkerPageRes = {
  data: {
    amount?: number;

    pages?: number;

    pageSize?: number;

    currentPage?: number;

    list: {
      markDatasetId: number; // 标注数据集ID

      markData: ImarkDataMarkerPageResmarkDataInterFace[]; // 标注数据项
    };
  };

  status: number; // 200成功，其余失败
};

export type markDataMarkerPageReq = {
  pageSize?: number;

  pageIndex?: number;

  markDatasetId: number; // 标注数据集ID

  marked?: boolean; // 为空查全部，为 true 查已被标注的数据项，为 false 查询未被标注的数据项

  labelName?: string; // 当 marked 为 true 时有效，查询已被标注的数据项中，被 labelName 标注的数据项
};

export function markDataMarkerPage(data: markDataMarkerPageReq): Promise<markDataMarkerPageRes> {
  return request.post("/markData/marker/page", data);
}

/**
 * 标注数据项删除（单人标注）
 */

export type markDataMarkerRemoveRes = {
  message?: string;

  status: number; // 200成功，其余失败
};

export type markDataMarkerRemoveReq = number[]; // 标注数据项ID数组，如[1,2,3]

export function markDataMarkerRemove(data: markDataMarkerRemoveReq): Promise<markDataMarkerRemoveRes> {
  return request.post("/markData/marker/remove", data);
}

/**
 * 标注结果更新（单人标注）
 */

export type markDataMarkerSubmitRes = {
  message?: string;

  status: number; // 200成功，其余失败
};

export type markDataMarkerSubmitReq = ImarkDataMarkerSubmitReqmarkDataMarkerSubmitReqInterFace[]; // 标注结果集

export function markDataMarkerSubmit(data: markDataMarkerSubmitReq): Promise<markDataMarkerSubmitRes> {
  return request.post("/markData/marker/submit", data);
}
