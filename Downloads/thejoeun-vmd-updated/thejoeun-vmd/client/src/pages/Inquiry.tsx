import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { Loader2, Upload, X } from "lucide-react";

const inquirySchema = z.object({
  clientName: z.string().min(1, "이름을 입력해주세요"),
  clientEmail: z.string().email("올바른 이메일을 입력해주세요"),
  clientPhone: z.string().min(10, "올바른 전화번호를 입력해주세요"),
  companyName: z.string().optional(),
  productType: z.string().min(1, "품목을 선택해주세요"),
  material: z.string().min(1, "소재를 선택해주세요"),
  quantity: z.coerce.number().min(1, "수량을 입력해주세요"),
  specifications: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

export default function Inquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const createInquiryMutation = trpc.inquiries.create.useMutation();

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      companyName: "",
      productType: "",
      material: "",
      quantity: 1,
      specifications: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 파일 크기 제한 (10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error("파일 크기는 10MB 이하여야 합니다.");
        return;
      }
      setUploadedFile(file);
      setUploadProgress(0);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      // 파일이 있으면 업로드 시뮬레이션
      if (uploadedFile) {
        // 실제 환경에서는 storagePut을 사용하여 파일을 S3에 업로드
        // 여기서는 시뮬레이션만 수행
        for (let i = 0; i <= 100; i += 10) {
          setUploadProgress(i);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }

      await createInquiryMutation.mutateAsync({
        ...data,
        quantity: Number(data.quantity),
      });

      toast.success("주문 의뢰가 성공적으로 접수되었습니다!");
      form.reset();
      removeFile();

      // 3초 후 홈페이지로 이동
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error: any) {
      toast.error(
        error?.message || "주문 의뢰 접수 중 오류가 발생했습니다."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const productTypes = [
    "디스플레이",
    "POP",
    "사이니지",
    "조명",
    "소품",
    "기타",
  ];

  const materials = [
    "아크릴",
    "금속",
    "아크릴 + 금속",
    "기타",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            주문제작 의뢰
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            아래 양식을 작성하여 주문을 의뢰해주세요. 빠르게 연락드리겠습니다.
          </p>
        </div>
      </section>

      {/* 폼 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* 기본 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  기본 정보
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="clientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름 *</FormLabel>
                        <FormControl>
                          <Input placeholder="고객명" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="clientPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>전화번호 *</FormLabel>
                        <FormControl>
                          <Input placeholder="010-1234-5678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <FormField
                    control={form.control}
                    name="clientEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이메일 *</FormLabel>
                        <FormControl>
                          <Input placeholder="example@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>회사명</FormLabel>
                        <FormControl>
                          <Input placeholder="회사명 (선택사항)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* 제작 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  제작 정보
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="productType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>품목 *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="품목을 선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {productTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="material"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>소재 *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="소재를 선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {materials.map((material) => (
                              <SelectItem key={material} value={material}>
                                {material}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>수량 *</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* 상세 요청사항 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  상세 요청사항
                </h3>

                <FormField
                  control={form.control}
                  name="specifications"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>사양/요청사항</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="크기, 색상, 디자인 등 상세한 요청사항을 입력해주세요."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* 파일 업로드 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  파일 첨부
                </h3>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dwg"
                    disabled={isSubmitting}
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="text-blue-600" size={32} />
                    <p className="text-gray-900 font-semibold">
                      파일을 드래그하거나 클릭하여 업로드
                    </p>
                    <p className="text-sm text-gray-600">
                      (최대 10MB, PDF, 이미지, 도면 파일 등)
                    </p>
                  </label>
                </div>

                {uploadedFile && (
                  <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-gray-900">
                        {uploadedFile.name}
                      </p>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-gray-500 hover:text-red-600 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    )}
                    {uploadProgress === 100 && (
                      <p className="text-xs text-green-600">업로드 완료</p>
                    )}
                  </div>
                )}
              </div>

              {/* 제출 버튼 */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      접수 중...
                    </>
                  ) : (
                    "주문 의뢰 제출"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                  className="flex-1 py-6 text-lg rounded-lg"
                >
                  초기화
                </Button>
              </div>

              <p className="text-sm text-gray-600 text-center">
                * 표시된 항목은 필수 입력 항목입니다.
              </p>
            </form>
          </Form>
        </div>
      </section>

      {/* 연락처 정보 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            직접 연락하기
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                전화
              </p>
              <a
                href="tel:02-441-0725"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                02-441-0725
              </a>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                이메일
              </p>
              <a
                href="mailto:taing725@daum.net"
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 break-all"
              >
                taing725@daum.net
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
